const Recipe = require("../models/recipe")

module.exports = {
    async createRecipe(req, res) {
        const title = req.body.title
        const description = req.body.description
        const time = req.body.duration
        const author = req.body.author
        const images = req.body.images
        const ingredients = req.body.ingredients

        const duplicate = await Recipe.findOne({
            $and: [
                {title: title},
                {description: description}
            ]
        })

        if(duplicate) {
            await Recipe.updateOne(
                {$and: [
                        {title: title},
                        {description: description}
                    ]},
                {
                    $set: {time: time, author: author, images: images, ingredients: ingredients},
                },
                {new: true}
            )
            res.status(200).send("Recipe Updated")
        } else if(!duplicate) {
            const recipe = new Recipe({
                title: title,
                description: description,
                time: time,
                author: author,
                images: images,
                ingredients: ingredients
            })
            const result = await recipe.save()

            res.status(200).send(result)
        }
    },
    async getRecipe(req, res) {
        const user = req.query.userID;
        let recipes = await Recipe.find({author: user})
        if (recipes.toString().length > 2) {
            res.status(200).send(recipes)
        } else {
            res.status(404).send("No Recipes found")
        }
    },
    async deleteRecipe(req,res) {
        const rec_id = req.query._id
        try {
            await Recipe.deleteOne({_id: rec_id})
            res.status(200).send("Recipe successfully deleted")
        } catch(e) {
            res.status(404).send("Recipe could not be deleted!")
        }

    }
}