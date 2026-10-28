import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

const embed = new EmbedBuilder()
	.setColor(0x17a2b8)
	.setTitle(`Serveur Minecraft Buildmyworld`)
	.setDescription(`:link: IP : play.buildmyworld.fr
					:link: https://buildmyworld.fr/server
					:jigsaw: Minecraft Java Edition - Versions 1.18 a 26.3
					:jigsaw: Minecraft Bedrock Edition (PC)- Versions 1.18 a 26.30`);

export const data = new SlashCommandBuilder()
	.setName('server')
	.setNameLocalizations({
		fr: 'serveur',
	})
	.setDescription('Display server informations')
	.setDescriptionLocalizations({
		fr: 'Affiche les informations du serveur',
	});
export async function execute(interaction) {
	await interaction.reply({ embeds: [embed] });
}
