'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funko extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Funko.belongsToMany(models.Category, {
        through:models.FunkoCategory
      })
      Funko.belongsToMany(models.Order, {
        through:models.FunkoOrder
      })
    }
  }
  Funko.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:"Por favor introduce el nombre del funko"
        },
      } ,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg:"Por favor introduce el precio del funko"
        },
      } ,
    }
  }, {
    sequelize,
    modelName: 'Funko',
  });
  return Funko;
};