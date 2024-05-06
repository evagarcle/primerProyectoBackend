const express = require("express")
const FunkoController = require("../controllers/FunkoController")
const { authentication } = require("../middleware/authentication")
const router = express.Router()


router.post('/',authentication, FunkoController.create)
router.get('/', FunkoController.getAll)
router.delete('/id/:id',authentication, FunkoController.delete)
router.put('/id/:id',authentication, FunkoController.update)
router.get('/id/:id', FunkoController.getById)
router.get('/name/:name', FunkoController.getByName)
router.get('/price/:price', FunkoController.getByPrice)
router.get('/price', FunkoController.orderByPriceDesc)



module.exports = router