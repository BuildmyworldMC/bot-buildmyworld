const { SlashCommandBuilder } = require('discord.js');

function computeFrTime(time) {
	let splitedTime = time.split('h');

	return `${parseInt(splitedTime[0]) + 6}h${splitedTime[1]}`;
};

function computeMessage(weekEnabled, weekendEnabled, weekTime, weekendTime ) {
	const quickerzRoleId = '668240840556019741';
	const builderRoleId = '321732484398055435';
	const apprenticeBuilderRoleId = '807391085638189147';

  let message = `<@&${quickerzRoleId}> <@&${builderRoleId}> <@&${apprenticeBuilderRoleId}> Quels sont vos disponibilités`;

  if (weekEnabled) {
    message += ` pour la semaine a ${computeFrTime(weekTime)} :flag_fr: (${weekTime} :flag_ca:) ?`;
  }

  if (weekEnabled && weekendEnabled) {
    message += ` (W pour mercredi). Et`;
  }

  if (weekendEnabled) {
    message += ` pour le weekend dès ${computeFrTime(weekendTime)} :flag_fr: (${weekendTime} :flag_ca:) ?`;
  }

	return message;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('availabilities')
		.setDescription('Display availabilities picker for Builder and Quickerz')
		.addBooleanOption(option =>
			option.setName('weekenabled')
				.setDescription('Enabled/Disabled availabilities for week on picker')
				.setRequired(true))
		.addBooleanOption(option =>
			option.setName('weekendenabled')
				.setDescription('Enabled/Disabled availabilities for weekend on picker')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('weektime')
				.setDescription('Week time display on message')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('weekendtime')
				.setDescription('Weekend time display on message')
				.setRequired(true)),
	async execute(interaction) {
		let weekEnabled = interaction.options.getBoolean('weekenabled');
		let weekendEnabled = interaction.options.getBoolean('weekendenabled');

		let weekTime = interaction.options.getString('weektime');
		let weekendTime = interaction.options.getString('weekendtime');

		const message = await interaction.reply({ content: computeMessage(weekEnabled, weekendEnabled, weekTime, weekendTime), fetchReply: true });

		if (weekEnabled) {
			message.react('🇱');
			message.react('🇲');
			message.react('🇼');
			message.react('🇯');
			message.react('🇻');
		}

		if (weekendEnabled) {
			message.react('🇸');
			message.react('🇩');
		}
	},
};
