const { SlashCommandBuilder } = require('discord.js');

const BuildmychunkParticipation = require('../../models/buildmychunk/participation.model.js');
const logger = require('../../logger.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vote')
		.setDescription('Create a participation and display the voting system')
		.setDescriptionLocalizations({
			fr: 'Crée une participation et affiche le systeme de vote',
		})
		.addStringOption(option =>
			option.setName('eventname')
				.setDescription('Event name (ex: buildmychunk-YYYY-MM) ?')
				.setDescriptionLocalizations({
					fr: "Nom de l'événement (ex: buildmychunk-YYYY-MM) ?",
				})
				.setRequired(true))
			.addStringOption(option =>
				option.setName('participantname')
					.setDescription('Participant name ?')
					.setDescriptionLocalizations({
						fr: 'Nom du participant ?',
					})
					.setRequired(true)),
	async execute(interaction) {
		let eventName = interaction.options.getString('eventname');
		let participantName = interaction.options.getString('participantname');

		if (!interaction.client.events || !interaction.client.events[eventName]) {
			logger.log('warn', `No event exist or "${eventName}" event not exist !`);
			return;
		}

		const message = await interaction.reply({ content: `Participation pour ${participantName}`, fetchReply: true });
		logger.log('info', `Participation for "${participantName}" has created in "${eventName}" event`);

		try {
			await message.react(BuildmychunkParticipation.onePointReaction);
			await message.react(BuildmychunkParticipation.twoPointsReaction);
			await message.react(BuildmychunkParticipation.threePointsReaction);
			await message.react(BuildmychunkParticipation.fourPointsReaction);
			await message.react(BuildmychunkParticipation.fivePointsReaction);
		} catch (error) {
			logger.log('error', 'One of the reaction failed to react:', error);
		}

		interaction.client.events[eventName].participations.push(new BuildmychunkParticipation(participantName, message));
	},
};
