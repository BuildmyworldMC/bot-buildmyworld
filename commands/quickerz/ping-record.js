import { SlashCommandBuilder } from 'discord.js';

import logger from '../../logger.js';

export const data = new SlashCommandBuilder()
	.setName('ping-record')
	.setNameLocalizations({
		fr: 'ping-tournage',
	})
	.setDescription('Displays a message indicating the start of a shoot to Quickerz and Builders')
	.setDescriptionLocalizations({
		fr: "Affiche un message indiquant le début d'un tournage aux Quickerz et Batiesseurs",
	});
export async function execute(interaction) {
	const quickerzRoleId = '668240840556019741';
	const builderRoleId = '321732484398055435';
	const apprenticeBuilderRoleId = '807391085638189147';

	await interaction.reply(`<@&${quickerzRoleId}> <@&${builderRoleId}> <@&${apprenticeBuilderRoleId}> 🔔 Un tournage commence ! 🔔`);
}
