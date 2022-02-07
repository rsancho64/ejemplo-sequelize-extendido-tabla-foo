const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const participation = require('../models').participation;
const juegos = require('../models').juegos;
const usuarios = require('../models').usuarios;

module.exports = {
	/**
	 * Create a new participation
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 */
	create(req, res) {
		// Looking for the user
		// SELECT * FROM usuarios WHERE id = 1 OR username = 'Lucas'
		// SELECT * FROM usuarios WHERE id = 1
		// SELECT * FROM usuarios WHERE username = 'Lucas'
		const responseUsuario = usuarios.findOne({
			where: {
				[Op.or]: [{
					username: req.body.user
				}, {
					id: req.body.user
				}]
			}
		});

		// Looking for the game
		const responseJuegos = juegos.findOne({
			where: {
				[Op.or]: [{
					name: req.body.game
				}, {
					id: req.body.game
				}]
			}
		});

		Promise
			.all([responseUsuario, responseJuegos])
			.then(responses => {
				return participation
					.create({
						jugador_id: responses[0].id,
						juego_id: responses[1].id,
						status: req.body.status,
					})
					.then(participation => res.status(200).send(participation))
					.catch(error => res.status(400).send(error))
			})
	},

	/**
	 * List of participations
	 * 
	 * @param {*} _ 
	 * @param {*} res 
	 */
	list(_, res) {
		return participation
			.findAll({
				include: [{
					model: usuarios,
					as: 'usuario',
					attributes: [
						'id',
						'username'
					]
				}, {
					model: juegos,
					as: 'juego',
					attributes: [
						'id',
						'name',
						'description'
					]
				}],
				attributes: [
					'status',
					'juego_id'
				]
			})
			.then(participation => res.status(200).send(participation))
			.catch(error => res.status(400).send(error))
	}

}