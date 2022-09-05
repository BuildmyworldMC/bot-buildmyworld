const { SlashCommandBuilder } = require('discord.js');

function computeFrTime(time) {
	let splitedTime = time.split('h');

	return `${parseInt(splitedTime[0]) + 6}h${splitedTime[1]}`;
};

function computeMessage(weekMode, weekendMode, weekTime, weekendTime ) {
	const quickerzRoleId = '668240840556019741';
	const builderRoleId = '321732484398055435';
	const apprenticeBuilderRoleId = '807391085638189147';

  let message = `<@&${quickerzRoleId}> <@&${builderRoleId}> <@&${apprenticeBuilderRoleId}> Quels sont vos disponibilités`;

  if (weekMode) {
    message += ` pour la semaine a ${computeFrTime(weekTime)} :flag_fr: (${weekTime} :flag_ca:) ?`;
  }

  if (weekMode && weekendMode) {
    message += ` (W pour mercredi). Et`;
  }

  if (weekendMode) {
    message += ` pour le weekend dès ${computeFrTime(weekendTime)} :flag_fr: (${weekendTime} :flag_ca:) ?`;
  }

	return message;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('availabilities')
		.setDescription('Display availabilities picker for Builder and Quickerz'),
	async execute(interaction) {
		let weekMode = true;
		let weekendMode = true;

		const message = await interaction.reply({ content: computeMessage(true, true, '8h30', '9h'), fetchReply: true });

		if (weekMode) {
			message.react('🇱');
			message.react('🇲');
			message.react('🇼');
			message.react('🇯');
			message.react('🇻');
		}

		if (weekendMode) {
			message.react('🇸');
			message.react('🇩');
		}
	},
};
