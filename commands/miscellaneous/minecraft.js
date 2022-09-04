const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const embed = new EmbedBuilder()
	.setColor(0x17a2b8)
	.setTitle(`Serveur Minecraft`)
	.setDescription(`:link: IP : play.buildmyworld.fr
:jigsaw: Version : 1.19.0 Vanilla`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display server informations'),
	async execute(interaction) {
		await interaction.reply({ embeds: [embed] });
	},
};
