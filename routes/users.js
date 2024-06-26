const express = require("express")
const UserController = require("../controllers/UserController")
const { authentication } = require("../middleware/authentication")
const router = express.Router()


router.post('/', UserController.create)
router.get('/', authentication, UserController.getAll)
router.post('/login', UserController.login)
router.delete('/logout', authentication, UserController.logout)
router.get("/usersOrdersFunkos", UserController.getUsersOrdersFunkos)







module.exports = router