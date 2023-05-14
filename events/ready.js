const logger = require('../logger');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		// Init events dictionary
		client.events = {};

		logger.log('info', '--------------START--------------');
		logger.log('info', `Ready! Logged in as ${client.user.tag}`);
	},
};
