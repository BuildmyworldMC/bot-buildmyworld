const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('result')
		.setNameLocalizations({
			fr: 'resultat'
		})
		.setDescription('Shows the results of the votes')
		.setDescriptionLocalizations({
			fr: 'Affiche le résultat des votes',
		})
		.addStringOption(option =>
			option.setName('eventname')
				.setDescription('Target event name (ex: buildmychunk-YYYY-MM)')
				.setDescriptionLocalizations({
					fr: "Nom de l 'événement (ex: buildmychunk-YYYY-MM) ?",
				})
				.setRequired(true)),
	async execute(interaction) {
		let eventName = interaction.options.getString('eventname');

		await interaction.reply(await interaction.client.eventsBuildmychunk[0].computeResult(interaction.client));
	},
};
