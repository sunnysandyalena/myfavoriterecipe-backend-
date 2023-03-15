const RecipeModel = require('./RecipeModel');

module.exports.getRecipe = async(req, res) => {
    const myRecipe = await RecipeModel.find();
    res.send(myRecipe)
}

module.exports.saveRecipe = async(req, res) => {
    const { title, lable, ingredients, text } = req.body;
    RecipeModel.create({ title, lable, ingredients, text })
    .then((data) => {console.log('Recipe created')
    res.send(data)
})
}

module.exports.deleteRecipe = async(req, res) => {
    const {_id} = req.body;
    RecipeModel.findByIdAndDelete(_id)
    .then(()=>res.send('Recipe deleted'))
}

module.exports.editRecipe = async(req, res) => {
    const {_id, title, lable, ingredients, text } = req.body;
    RecipeModel.findByIdAndUpdate(_id, { title, lable, ingredients, text })
    .then(() => res.send('Recipe updated'))
}
