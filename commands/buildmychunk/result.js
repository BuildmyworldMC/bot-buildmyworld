const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('result')
		.setDescription('Compute and display event result')
		.addStringOption(option =>
			option.setName('eventname')
				.setDescription('Target event name (ex: buildmychunk-YYYY-MM)')
				.setRequired(true)),
	async execute(interaction) {
		let eventName = interaction.options.getString('eventname');

		await interaction.reply(await interaction.client.eventsBuildmychunk[0].computeResult(interaction.client));
	},
};
