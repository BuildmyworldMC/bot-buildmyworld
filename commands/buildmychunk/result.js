import { SlashCommandBuilder } from 'discord.js';

import logger from '../../logger.js';

export const data = new SlashCommandBuilder()
	.setName('result')
	.setNameLocalizations({
		fr: 'resultat'
	})
	.setDescription('Shows the results of the votes')
	.setDescriptionLocalizations({
		fr: 'Affiche le résultat des votes',
	})
	.addStringOption(option => option.setName('eventname')
		.setDescription('Target event name (ex: buildmychunk-YYYY-MM)')
		.setDescriptionLocalizations({
			fr: "Nom de l 'événement (ex: buildmychunk-YYYY-MM) ?",
		})
		.setRequired(true));
export async function execute(interaction) {
	let eventName = interaction.options.getString('eventname');

	if (!interaction.client.events || !interaction.client.events[eventName]) {
		logger.warn(`No event exist or "${eventName}" event not exist !`);
		await interaction.reply({
			content: `L’événement « ${eventName} » n’existe pas.`,
			ephemeral: true,
		});
		return;
	}

	await interaction.deferReply();
	const computedResultMessage = await interaction.client.events[eventName].computeResult(interaction.client);
	await interaction.editReply(computedResultMessage);
	logger.info(`Result for "${eventName}" was displayed`);
}
