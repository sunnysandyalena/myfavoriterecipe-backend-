const { Router } = require('express');
const { getRecipe, saveRecipe, deleteRecipe, editRecipe } = require('./RecipeController');
const router = Router();

router.get('/', getRecipe);
router.post('/saveRecipe', saveRecipe);
router.post('/deleteRecipe', deleteRecipe);
router.post('/editRecipe', editRecipe);

module.exports = router;