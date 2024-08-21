const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setNameLocalizations({
			fr: 'aide',
		})
		.setDescription('Display bot help')
		.setDescriptionLocalizations({
			fr: "Affiche l'aide du bot",
		}),

	async execute(interaction) {
		await interaction.reply('Contactez le staff du discord pour tous probleme lie au bot. Merci');
	},
};
