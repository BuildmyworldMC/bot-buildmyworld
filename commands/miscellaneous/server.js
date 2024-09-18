const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

const embed = new EmbedBuilder()
	.setColor(0x17a2b8)
	.setTitle(`Serveur Minecraft`)
	.setDescription(`:link: IP : play.buildmyworld.fr
					:link: https://buildmyworld.fr/server
					:jigsaw: Minecraft Java Edition - Versions 1.18 a 1.21
					:jigsaw: Minecraft Bedrock Edition (PC)- Versions 1.18 a 1.21`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setNameLocalizations({
			fr: 'serveur',
		})
		.setDescription('Display server informations')
		.setDescriptionLocalizations({
			fr: 'Affiche les informations du serveur',
		}),

	async execute(interaction) {
		await interaction.reply({ embeds: [embed] });
	},
};
