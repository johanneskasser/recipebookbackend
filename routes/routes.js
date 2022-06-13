const router = require("express").Router()
const test = require('../services/test')

router.get('/test', test.test);

module.exports = router;