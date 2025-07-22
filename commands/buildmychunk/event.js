import { SlashCommandBuilder } from 'discord.js';

import logger from '../../logger.js';
import BuildmychunkEvent from '../../models/buildmychunk/event.model.js';

export const data = new SlashCommandBuilder()
	.setName('event')
	.setDescription('Create event')
	.setDescriptionLocalizations({
		fr: 'Créer un événement',
	})
	.addStringOption(option => option.setName('eventname')
		.setDescription('Event name (ex: buildmychunk-YYYY-MM) ?')
		.setDescriptionLocalizations({
			fr: "Nom de l'évenement (ex: buildmychunk-YYYY-MM) ?",
		})
		.setRequired(true));
export async function execute(interaction) {
	let eventName = interaction.options.getString('eventname');

	if (interaction.client.events[eventName]) {
		logger.warn(`"${eventName}" event was not overridden because is already exist !`);
		return; // Prevent event override
	}

	interaction.client.events[eventName] = new BuildmychunkEvent(eventName);
	await interaction.reply(`Creation de l'événement Buildmychunk "${eventName}" !`);
	logger.info(`"${eventName}" event has created`);
}
