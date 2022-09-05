const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setNameLocalizations({
			fr: 'bonjour',
		})
		.setDescription('Bot say hello !')
		.setDescriptionLocalizations({
			fr: 'Le bot dis bonjour !',
		}),
	async execute(interaction) {
		await interaction.reply('Bonjour ! Je suis Orion, le bot officiel du projet Buildmyworld !');
	},
};
