import { config } from 'dotenv';

import logger from '../logger.js';

const env = config().parsed;

export const name = 'interactionCreate';
export function execute(interaction) {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	logger.info(`Command /${interaction.commandName} is requested by ${interaction.user.username}#${interaction.user.discriminator}`);

	let isAuthorized = true;

	switch (interaction.commandName) {
		// Quickerz
		case 'availabilities':
		case 'ping-record':
		// Buildmychunk
		case 'event':
		case 'vote':
		case 'result':
		case 'registration':
			if (!interaction.member.roles.cache.has(env.BOT_STAFF_ROLE_ID)) {
				isAuthorized = false;
				logger.warning('Restricted access');
				return;
			}
			break;
	}

	if (isAuthorized) {
		try {
			command.execute(interaction);
			logger.info(`Command /${interaction.commandName} is executed by ${interaction.user.username}#${interaction.user.discriminator}`);
		} catch (error) {
			logger.error(`${error}`);
			interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
}
