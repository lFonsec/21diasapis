'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize_config')

  class Evento extends Model {
    static associate(models) { }
  };
  Evento.init({
    idUsuario: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Evento',
  });
  module.exports =  Evento;
