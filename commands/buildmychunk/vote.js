const { SlashCommandBuilder } = require('discord.js');
const BuildmychunkParticipation = require('../../models/buildmychunk/participation.model.js');

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

		if (!interaction.client.eventsBuildmychunk) {
			return;
		}

		const message = await interaction.reply({ content: `Participation pour ${participantName}`, fetchReply: true });
		message.react(BuildmychunkParticipation.onePointReaction);
		message.react(BuildmychunkParticipation.twoPointsReaction);
		message.react(BuildmychunkParticipation.threePointsReaction);
		message.react(BuildmychunkParticipation.fourPointsReaction);
		message.react(BuildmychunkParticipation.fivePointsReaction);

		interaction.client.eventsBuildmychunk[0].participations.push(new BuildmychunkParticipation(participantName, message));
	},
};
