import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName('hello')
	.setNameLocalizations({
		fr: 'bonjour',
	})
	.setDescription('Bot say hello !')
	.setDescriptionLocalizations({
		fr: 'Le bot dis bonjour !',
	});
export async function execute(interaction) {
	await interaction.reply('🌟 Bonjour et bienvenue ! Je suis Orion, le bot officiel de Buildmyworld. Prêt à explorer ensemble notre projet incroyable ? 🚀');
}
