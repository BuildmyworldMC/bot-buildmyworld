const dotenv = require('dotenv');

const logger = require('../logger.js');

const env = dotenv.config().parsed;

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

  	const command = interaction.client.commands.get(interaction.commandName);

  	if (!command) return;

	  logger.log('info', `Command /${interaction.commandName} is requested by ${interaction.user.username }#${interaction.user.discriminator}`);

		let isAuthorized = true;

		switch(interaction.commandName) {
			// Quickerz
			case 'availabilities':
			// Buildmychunk
			case 'event':
			case 'vote':
			case 'result':
				console.log(!interaction.member.roles.cache.has(env.BOT_STAFF_ROLE_ID));
				if (!interaction.member.roles.cache.has(env.BOT_STAFF_ROLE_ID)) {
					isAuthorized = false;
					logger.log('warning', 'Restricted access');
					return;
				}
				break;
		}

		if (isAuthorized) {
			try {
				command.execute(interaction);
				logger.log('info', `Command /${interaction.commandName} is executed by ${interaction.user.username }#${interaction.user.discriminator}`);
			} catch (error) {
				logger.log('error', `${error}`);
				interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};
