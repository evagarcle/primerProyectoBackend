const {User, Token} = require ('../models/index')
const bcrypt = require(("bcryptjs"))
const jwt = require("jsonwebtoken")
const {jwt_secret} = require("../config/config.json")["development"]


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
  }
}



module.exports = UserController
