const {Category, Funko} = require ('../models/index')

const CategoryController = {
  async create(req, res) {
    try {
      const category = await Category.create(req.body)
      res.status(201).send({msg:"Categoría creado con éxito", category})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async update(req,res){
    try {
      await Category.update(req.body,
      {
        where: {
          id:req.params.id
        }
      }
    )
    // const category = await Category.findByPk(req.params.id)
    // category.setCategories(req.body.CategoryId)
    res.send("Category actualizado con éxito")
    } catch (error) {
      console.error(error)
      res.status(500).send({msg: "No ha sido posible actualizar el categoría", error})
    }
  },
  async delete(req,res) {
    try {
      await Category.destroy({
        where: {
          id: req.params.id 
        }
      })
      res.send({msg:"Categoría eliminada con éxito"})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getAll(req,res){
    try {
      const categories = await Category.findAll({
        include:[{ model: Funko, attributes:["name"], through: { attributes: [] } }] /**para que solo nos devuelva el name en el postman */
      })
      res.send(categories)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getById(req,res) {
    try {
      const categoryById = await Category.findByPk(req.params.id)
      res.send(categoryById)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getByName(req,res) {
    try {
      const categoryByName = await Category.findOne({ where: { name: req.params.name },  include:[{ model: Funko, attributes:["name"], through: { attributes: [] } }] }  )
      
      res.send(categoryByName)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}




module.exports = CategoryController