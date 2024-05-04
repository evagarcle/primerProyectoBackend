const express = require("express")
const FunkoController = require("../controllers/FunkoController")
const router = express.Router()


router.post('/', FunkoController.create)
router.get('/', FunkoController.getAll)
router.delete('/id/:id', FunkoController.delete)
router.put('/id/:id', FunkoController.update)
router.get('/id/:id', FunkoController.getById)
router.get('/name/:name', FunkoController.getByName)
router.get('/price/:price', FunkoController.getByPrice)



module.exports = router