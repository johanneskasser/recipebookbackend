const router = require("express").Router()
const test = require('../services/test')
const auth = require('../services/authentication')
const recipe = require('../services/recipe')
const upload = require('../middleware/uploadMiddleware')
const express = require("express");
const path = require("path");

router.get('/', test.upMessage)

router.get('/test', test.test);

router.post('/register', auth.register)

router.post('/login', auth.login)

router.post('/logout', auth.logout)

router.post('/createRecipe', recipe.createRecipe)

router.get("/getRecipe", recipe.getRecipe)

router.get("/deleteRecipe", recipe.deleteRecipe)

//router.post("/uploadImg", upload.single('image') ,recipe.uploadImg)

//router.get("/images", recipe.getImage)

module.exports = router;