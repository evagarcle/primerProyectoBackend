const {Order, User, Funko} = require("../models/index")

const OrderController = {
  async create(req,res){
    try {
      req.body.UserId = req.user.id
      const order = await Order.create(req.body)
      order.addFunko(req.body.FunkoId)
      res.status(201).send({msg:"Pedido creado con éxito"})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getAll(req,res){
    try {
      const orders = await Order.findAll({
        include:[{ model: User, attributes:["firstName"]}, { model: Funko, attributes:["name"], through: { attributes: [] } }] /**para que solo nos devuelva el firstName en el postman */

      })
      res.send(orders)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}


module.exports = OrderController