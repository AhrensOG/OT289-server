const express = require('express');
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

router.delete('/delete/:id', categoriesController.deleteCategory);
router.get('/', categoriesController.getCategories)

module.exports = router;