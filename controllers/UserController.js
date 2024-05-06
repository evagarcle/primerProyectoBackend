const {User, Token, Order, Sequelize, Funko} = require ('../models/index')
const bcrypt = require(("bcryptjs"))
const jwt = require("jsonwebtoken")
const {jwt_secret} = require("../config/config.json")["development"]
const {Op} = Sequelize


const UserController = {
  async create(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password,10)
      req.body.password = password
      const user = await User.create(req.body)
      res.status(201).send({msg:"Usuario creado con éxito"})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getAll(req,res){
    try {
      const users = await User.findAll({
        include:[{ model: Order, attributes:["number"] }] /**para que solo nos devuelva el name en el postman */
      })
      res.send({msg:"Todos los usuarios", users})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async login(req,res){
    try {
     const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      })
      if (!user) {
        return res.status(400).send({msg:"Usuario o contraseña incorrectos"})
      }

      const isMatch = bcrypt.compareSync(req.body.password, user.password)
      if (!isMatch) {
        return res.status(400).send({msg:"Usuario o contraseña incorrectos"})
      }
      const token = jwt.sign({id:user.id}, jwt_secret)
      await Token.create({UserId:user.id,token})
      res.send({token,user})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async logout(req,res){
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            {UserId: req.user.id},
            {token: req.headers.authorization}
          ]
        }
      })
      res.send({msg:"Desconectado con éxito"})
    } catch (error) {
      console.error(error)
      res.status(500).send({msg:"Hubo un problema al tratar de desconectarse"})
    }
  },
  async getUsersOrdersFunkos(req,res){
    try {
      const users = await User.findAll({
        include: [
          {
            model: Order,
            include: [
              {
                model: Funko
              }
            ]
          }
        ]
      })
      res.send(users)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}



module.exports = UserController
