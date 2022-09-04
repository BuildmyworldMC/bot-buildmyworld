const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Bot stay hello !'),
	async execute(interaction) {
		await interaction.reply('Bonjour ! Je suis Orion, le bot officiel du projet Buildmyworld !');
	},
};
