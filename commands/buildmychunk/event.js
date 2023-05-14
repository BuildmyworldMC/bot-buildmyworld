const { SlashCommandBuilder } = require('discord.js');

const logger = require('../../logger.js');
const BuildmychunkEvent = require('../../models/buildmychunk/event.model.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('event')
    .setDescription('Create event')
		.setDescriptionLocalizations({
			fr: 'Créer un événement',
		})
    .addStringOption(option => option.setName('eventname')
        .setDescription('Event name (ex: buildmychunk-YYYY-MM) ?')
				.setDescriptionLocalizations({
					fr: "Nom de l'évenement (ex: buildmychunk-YYYY-MM) ?",
				})
        .setRequired(true)),
  async execute(interaction) {
		let eventName = interaction.options.getString('eventname');

		if (interaction.client.events[eventName]) {
			logger.log('warn', `"${eventName}" event was not overridden because is already exist !`);
			return; // Prevent event override
		}

    interaction.client.events[eventName] = new BuildmychunkEvent(eventName);
    await interaction.reply(`Creation de l'événement Buildmychunk "${eventName}" !`);
		logger.log('info', `"${eventName}" event has created`);
  },
};
