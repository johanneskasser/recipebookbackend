const Recipe = require("../models/recipe")
const path = require("path");
const fs = require("fs");

module.exports = {
    async createRecipe(req, res) {
        const _id = req.body._id
        const title = req.body.title
        const description = req.body.description
        const time = req.body.time
        const author = req.body.author
        const images = req.body.images
        const ingredients = req.body.ingredients

        const duplicate = await Recipe.findOne({
            _id: _id
        })

        if (duplicate) {
            await Recipe.updateOne(
                {
                    _id: _id
                },
                {
                    $set: {time: time, author: author, images: images, ingredients: ingredients},
                },
                {new: true}
            )
            res.status(200).send("Recipe Updated")
        } else if (!duplicate) {
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
    async editRecipe(req, res) {
        const _id = req.body._id
        const title = req.body.title
        const description = req.body.description
        const time = req.body.time
        const author = req.body.author
        const images = req.body.images
        const ingredients = req.body.ingredients

        //console.log(_id, title, description, time, author, images, ingredients)

        const recipe = Recipe.findOne({_id: _id})
        if (recipe) {
            await Recipe.updateOne(
                {_id: _id},
                {
                    $set: {
                        title: title,
                        description: description,
                        time: time,
                        author: author,
                        images: images,
                        ingredients: ingredients
                    }
                }
            )
            const newRecipe = await Recipe.findOne({_id: _id})
            res.status(200).send(newRecipe)
        } else {
            res.status(404).send("Recipe not found")
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
    async deleteRecipe(req, res) {
        const rec_id = req.query._id
        try {
            await Recipe.deleteOne({_id: rec_id})
            res.status(200).send("Recipe successfully deleted")
        } catch (e) {
            res.status(404).send("Recipe could not be deleted!")
        }
    },


    /*
    async uploadImg(req, res) {
        if(req.file) {
            const pathName = process.env.BASE_URL + req.file.path
            res.status(200).send(pathName)
        }
    },

    async getImage(req, res) {
        const imageName = req.query.imagePath;
        const absolutePath = path.join(__dirname, "/../images/" + imageName)
        if(imageName && fs.existsSync(absolutePath)) {
            res.status(200).sendFile(absolutePath)
        } else {
            res.status(404).send("File not Found")
        }
    }*/

}