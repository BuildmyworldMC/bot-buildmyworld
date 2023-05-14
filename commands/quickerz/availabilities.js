const { SlashCommandBuilder } = require('discord.js');

const logger = require('../../logger.js');

function computeFrTime(time) {
	let splitedTime = time.split('h');

	return `${parseInt(splitedTime[0]) + 6}h${splitedTime[1]}`;
};

function computeMessage(weekEnabled, weekendEnabled, weekTime, weekendTime ) {
	const quickerzRoleId = '668240840556019741';
	const builderRoleId = '321732484398055435';
	const apprenticeBuilderRoleId = '807391085638189147';

  let message = `<@&${quickerzRoleId}> <@&${builderRoleId}> <@&${apprenticeBuilderRoleId}> Quels sont vos disponibilites`;

  if (weekEnabled) {
    message += ` pour la semaine a ${computeFrTime(weekTime)} :flag_fr: (${weekTime} :flag_ca:) ?`;
  }

  if (weekEnabled && weekendEnabled) {
    message += ` (W pour mercredi). Et`;
  }

  if (weekendEnabled) {
    message += ` pour le weekend des ${computeFrTime(weekendTime)} :flag_fr: (${weekendTime} :flag_ca:) ?`;
  }

	return message;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('availabilities')
		.setNameLocalizations({
			fr: 'dispo',
		})
		.setDescription('Display availabilities picker for Builders and Quickerz')
		.setDescriptionLocalizations({
			fr: 'Affiche le message demandant les disponibilités des Quickerz et Batiesseurs',
		})
		.addBooleanOption(option =>
			option.setName('weekenabled')
				.setDescription('Enables/Disables availabilities for the week')
				.setDescriptionLocalizations({
					fr: 'Active/Désactive les disponibilités pour la semaine',
				})
				.setRequired(true))
		.addBooleanOption(option =>
			option.setName('weekendenabled')
				.setDescription('Enables/Disables availabilities for the weekend')
				.setDescriptionLocalizations({
					fr: 'Active/Désactive les disponibilités pour la fin de semaine',
				})
				.setRequired(true))
		.addStringOption(option =>
			option.setName('weektime')
				.setDescription('Week time display on message')
				.setDescriptionLocalizations({
					fr: 'Heure affiche pour la semaine',
				})
				.setRequired(true))
		.addStringOption(option =>
			option.setName('weekendtime')
				.setDescription('Weekend time display on message')
				.setDescriptionLocalizations({
					fr: 'Heure affiche pour la fin de semaine',
				})
				.setRequired(true)),
	async execute(interaction) {
		let weekEnabled = interaction.options.getBoolean('weekenabled');
		let weekendEnabled = interaction.options.getBoolean('weekendenabled');

		let weekTime = interaction.options.getString('weektime');
		let weekendTime = interaction.options.getString('weekendtime');

		let computedMessage = computeMessage(weekEnabled, weekendEnabled, weekTime, weekendTime);

		const message = await interaction.reply({ content: computedMessage, fetchReply: true });
		logger.log('info', `Availabilities has displayed (trace: ${computedMessage})`);

		try {
			if (weekEnabled) {
				await message.react('🇱');
				await message.react('🇲');
				await message.react('🇼');
				await message.react('🇯');
				await message.react('🇻');
			}

			if (weekendEnabled) {
				await message.react('🇸');
				await message.react('🇩');
			}
		} catch (error) {
			logger.log('error', 'One of the reaction failed to react:', error);
		}

	},
};
