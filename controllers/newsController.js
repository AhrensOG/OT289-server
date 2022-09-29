const db = require('../models')
const { validationResult } = require("express-validator")

const newsControllers = {
    add: async (req, res) => {
        //Check if there is any error
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            let errorMessages = ''

            //List of errors
            errors.array().map(error => {
                errorMessages += error.msg + '. '
            })

            return res.status(401).send(errorMessages)
        }

        //Else Save in db
        const { name, content, image, categoryId } = req.body

        const entryObj = {
            name,
            content,
            image,
            categoryId,
            type: 'news',
            createdAt: new Date,
            updatedAt: new Date
        }

        const newEntry = new db.Entries(entryObj)
        return res.json(await newEntry.save())
    },
    destroy: async (req, res) => {
        try {
            const { id } = req.params;
            const findEntryById = await db.Entries.findByPk(id);
            if (!findEntryById) {
                res.status(404).send({
                    status: 'error',
                    message: `Entry with id ${id} not found`
                });
            }
            const deleteEntry = await findEntryById.destroy();
            if (!deleteEntry) {
                res.status(503).send({
                    status: 'error',
                    message: `Entry with ${id} failed delete`
                });
            }
            res.status(200).send({
                status: 'succes',
                message: `Entry with id ${id} deleted`
            })
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = newsControllers
