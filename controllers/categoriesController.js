const db = require('../models');
const { validationResult } = require("express-validator");

const testimonialsController = {
    deleteCategory: (req, res) => {
        db.Categories.destroy({ where: { id: req.params.id } })
            .then((category) => {
                if (category[0] === 0) {
                    return res.status(400).json({ errors: [{ msg: "No pudimos encontrar este testimonio" }] })
                }
                return res.status(200).json({ category })
            })
            .catch(error => {
                console.error(error)
                return res.status(400).json({ errors: [{ msg: "Estamos teniendo problemas en nuestras bases de datos, por favor intente mas tarde" }] })
            })
    },
    getCategories: (req, res) => {
        db.Categories.findAll()
            .then(data => {
                const newData = data.map(category => {
                    return {
                        id: category.dataValues.id,
                        name: category.dataValues.name
                    }
                })
                return res.status(200).send(newData)
            })
            .catch(error => {
                const errorObj = {
                    error: 'Problemas en la base de datos, por favor intente mas tarde',
                    sequelizeError: {
                        code: error.parent.code,
                        nro: error.parent.errno
                    }
                }
                return res.status(400).json(errorObj)
            })
    },
    postCategory: (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.json({ errors: errors.mapped() });
        } else {
            db.Categories.create({
                name: req.body.name,
            })
                .then((categorie) => {
                    return res.status(200).json({ message: "Categorie created succesfully", categorie })
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
}

module.exports = testimonialsController;