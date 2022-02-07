'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class participation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			participation.belongsTo(models.usuarios,
				{
					as: 'usuario',
					foreignKey: 'jugador_id'
				}
			);
			participation.belongsTo(models.juegos,
				{
					as: 'juego',
					foreignKey: 'juego_id'
				}
			);
		}
	};
	participation.init({
		jugador_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		juego_id: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		status: {
			allowNull: false,
			type: DataTypes.CHAR
		}
	}, {
		sequelize,
		modelName: 'participation',
	});
	return participation;
};