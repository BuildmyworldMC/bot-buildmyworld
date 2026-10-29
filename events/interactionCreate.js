import { config } from 'dotenv';

import {
	UNKNOWN_INTERACTION_ERROR_CODE,
	INTERACTION_HAS_ALREADY_BEEN_ACKNOWLEDGED_ERROR_CODE,
} from '../constants.js';
import logger from '../logger.js';

const env = config().parsed;

export const name = 'interactionCreate';
export async function execute(interaction) {
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
				logger.warn('Restricted access');
				await interaction.reply({ content: 'Cette commande est réservée au staff.', ephemeral: true });
				return;
			}
			break;
	}

	if (isAuthorized) {
		try {
			await command.execute(interaction);
			logger.info(`Command /${interaction.commandName} is executed by ${interaction.user.username}#${interaction.user.discriminator}`);
		} catch (error) {
			logger.error('Command execution failed', {
				commandName: interaction.commandName,
				interactionId: interaction.id,
				userId: interaction.user.id,
				error,
			});

			if (error.code === UNKNOWN_INTERACTION_ERROR_CODE ||
				error.code === INTERACTION_HAS_ALREADY_BEEN_ACKNOWLEDGED_ERROR_CODE) return;

			try {
				const response = { content: 'Une erreur est survenue pendant l’exécution de cette commande.', ephemeral: true };
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp(response);
				} else {
					await interaction.reply(response);
				}
			} catch (responseError) {
				logger.error('Failed to send command error response', {
					commandName: interaction.commandName,
					interactionId: interaction.id,
					error: responseError,
				});
			}
		}
	}
}
