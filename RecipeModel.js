const mongoose=require('mongoose');
const recipeSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lable: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model ("Recipes", recipeSchema)