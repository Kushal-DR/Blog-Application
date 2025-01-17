const express = require('express')
const { getAllUsers, registerController, loginController } = require('../controls/userContoller')

//router objrct
const router = express.Router()

router.get('/all-users', getAllUsers)

//create user || post
router.post('/register' , registerController);

//login || post
router.post('/login' , loginController);

module.exports = router