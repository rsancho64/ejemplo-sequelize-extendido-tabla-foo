'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  foo.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'foo',
  });
  return foo;
};