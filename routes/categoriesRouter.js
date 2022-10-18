const express = require('express');
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

//router.delete('/delete/:id', categoriesController.deleteCategory);
router.get('/', categoriesController.getCategories)
router.put("/:id", categoriesController.updateCategory);

router.delete("/:id", categoriesController.deleteCategory);

module.exports = router;