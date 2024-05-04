const {Funko, Category, FunkoCategory} = require ('../models/index')


const FunkoController = {
  async create(req,res) {
    try {
      const funko = await Funko.create(req.body)
      funko.addCategory(req.body.CategoryId)
      res.status(201).send({msg:"Libro creado con éxito",funko})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getAll(req,res){
    try {
      const funkos = await Funko.findAll({
        include:[{ model: Category, attributes:["name"], through: { attributes: [] } }] /**para que solo nos devuelva el name en el postman */
      })
      res.send(funkos)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async delete(req,res) {
    try {
      await Funko.destroy({
        where: {
          id: req.params.id 
        }
      })
      await FunkoCategory.destroy({
        where: {
          FunkoId:req.params.id
        }
      })
      res.send({msg:"Funko eliminado con éxito"})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async update(req,res){
    try {
      await Funko.update(req.body,
      {
        where: {
          id:req.params.id
        }
      }
    )
    const funko = await Funko.findByPk(req.params.id)
    funko.setCategories(req.body.CategoryId)
    res.send("Funko actualizado con éxito")
    } catch (error) {
      console.error(error)
      res.status(500).send({msg: "No ha sido posible actualizar el funko", error})
    }
  },
  async getById(req,res) {
    try {
      const funkoById = await Funko.findByPk(req.params.id)
      res.send(funkoById)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getByName(req,res) {
    try {
      const funkoByName = await Funko.findOne({ where: { name: req.params.name } })
      res.send(funkoByName)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getByPrice(req,res) {
    try {
        const funkoByPrice = await Funko.findOne({ where: { price: req.params.price } })
        res.send(funkoByPrice)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}


module.exports = FunkoController
