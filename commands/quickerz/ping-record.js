const { SlashCommandBuilder } = require('discord.js');

const logger = require('../../logger.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping-record')
		.setNameLocalizations({
			fr: 'ping-tournage',
		})
		.setDescription('Displays a message indicating the start of a shoot to Quickerz and Builders')
		.setDescriptionLocalizations({
			fr: "Affiche un message indiquant le début d'un tournage aux Quickerz et Batiesseurs",
		}),
	async execute(interaction) {
		const quickerzRoleId = '668240840556019741';
		const builderRoleId = '321732484398055435';
		const apprenticeBuilderRoleId = '807391085638189147';

		await interaction.reply(`<@&${quickerzRoleId}> <@&${builderRoleId}> <@&${apprenticeBuilderRoleId}> Un tournage commence !`);
	},
};
