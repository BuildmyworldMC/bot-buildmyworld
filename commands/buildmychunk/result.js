const { SlashCommandBuilder } = require('discord.js');

const logger = require('../../logger.js');

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

		if (!interaction.client.events || !interaction.client.events[eventName]) {
			logger.log('warn', `No event exist or "${eventName}" event not exist !`);
			return;
		}

		await interaction.deferReply();
	  	const computedResultMessage = await interaction.client.events[eventName].computeResult(interaction.client);
	  	await interaction.editReply(computedResultMessage);
		logger.log('info', `Result for "${eventName}" was displayed`);
	},
};
