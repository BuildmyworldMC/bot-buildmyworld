const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Display bot help'),
	async execute(interaction) {
		await interaction.reply('Contactez le staff du discord pour tous problème lié au bot. Merci');
	},
};
