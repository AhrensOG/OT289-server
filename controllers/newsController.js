const db = require("../models");
const { validationResult } = require("express-validator");

const newsControllers = {
  add: async (req, res) => {
    //Check if there is any error
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      let errorMessages = "";

      //List of errors
      errors.array().map((error) => {
        errorMessages += error.msg + ". ";
      });

      return res.status(401).send(errorMessages);
    }

    //Else Save in db
    const { name, content, image, categoryId } = req.body;

    const entryObj = {
      name,
      content,
      image,
      categoryId,
      type: "news",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newEntry = new db.Entries(entryObj);
    return res.json(await newEntry.save());
  },
  getNews: async (req, res) => {
    try {
      const news = await db.Entries.findAll({
        where: {
          type: "news",
        },
        attributes: ["name", "image", "createdAt"],
      });
      news.length
        ? res.status(200).send(news)
        : res.status(200).send("Not found");
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  findNewsId: async (req, res) => {
    const { id } = req.params;
    const entriesId = await db.Entries.findOne({ where: { id: id } });

    if (entriesId == null) {
      return res.status(404).json("El id no existe");
    }
    return res.status(200).json(entriesId);
  },
};

module.exports = newsControllers;