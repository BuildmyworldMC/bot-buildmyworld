import { SlashCommandBuilder } from 'discord.js';

import BuildmychunkParticipation from '../../models/buildmychunk/participation.model.js';
import logger from '../../logger.js';

export const data = new SlashCommandBuilder()
	.setName('vote')
	.setDescription('Create a participation and display the voting system')
	.setDescriptionLocalizations({
		fr: 'Crée une participation et affiche le système de vote',
	})
	.addStringOption(option => option.setName('eventname')
		.setDescription('Event name (ex: buildmychunk-YYYY-MM) ?')
		.setDescriptionLocalizations({
			fr: "Nom de l'événement (ex: buildmychunk-YYYY-MM) ?",
		})
		.setRequired(true))
	.addStringOption(option => option.setName('participantname')
		.setDescription('Participant name ?')
		.setDescriptionLocalizations({
			fr: 'Nom du participant ?',
		})
		.setRequired(true));
export async function execute(interaction) {
	let eventName = interaction.options.getString('eventname');
	let participantName = interaction.options.getString('participantname');

	if (!interaction.client.events || !interaction.client.events[eventName]) {
		logger.warn(`No event exist or "${eventName}" event not exist !`);
		await interaction.reply({
			content: `L’événement « ${eventName} » n’existe pas.`,
			ephemeral: true,
		});
		return;
	}

	await interaction.deferReply();
	const message = await interaction.editReply({ content: `Participation pour ${participantName}`, fetchReply: true });
	logger.info(`Participation for "${participantName}" has created in "${eventName}" event`);

	try {
		await message.react(BuildmychunkParticipation.onePointReaction);
		await message.react(BuildmychunkParticipation.twoPointsReaction);
		await message.react(BuildmychunkParticipation.threePointsReaction);
		await message.react(BuildmychunkParticipation.fourPointsReaction);
		await message.react(BuildmychunkParticipation.fivePointsReaction);
	} catch (error) {
		logger.error('One of the reaction failed to react:', error);
	}

	interaction.client.events[eventName].participations.push(new BuildmychunkParticipation(participantName, message));
}
