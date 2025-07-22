import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

const embed = new EmbedBuilder()
	.setColor(0x035f83)
	.setTitle('Wiki du projet pour la gestion du lore')
	.setDescription("Wiki du projet pour la gestion du lore de l'univers que nous construisons, bloc par bloc.")
	.setURL('https://wiki.buildmyworld.fr/')
	.setImage('https://buildmyworld.fr/storage/files/shares/news/monthly-updates/2021/2/wiki-buildmyworld.jpg');

export const data = new SlashCommandBuilder()
	.setName('wiki')
	.setNameLocalizations({
		fr: 'lore',
	})
	.setDescription('Display project wiki for lore')
	.setDescriptionLocalizations({
		fr: 'Affiche le wiki du project pour le lore',
	});
export async function execute(interaction) {
	await interaction.reply({ embeds: [embed] });
}
