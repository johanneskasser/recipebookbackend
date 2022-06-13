const router = require("express").Router()
const test = require('../services/test')
const auth = require('../services/authentication')

router.get('/', test.upMessage)

router.get('/test', test.test);

router.post('/register', auth.register)

router.post('/login', auth.login)

router.post('/logout', auth.logout)

module.exports = router;