const { SlashCommandBuilder } = require('discord.js');

const logger = require('../../logger.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('registration')
	.setNameLocalizations({
		fr: 'inscription'
	})
    .setDescription('Opens registrations for an event')
		.setDescriptionLocalizations({
			fr: 'Ouvre les inscriptions à un événement',
		})
    .addStringOption(option => option.setName('eventname')
        .setDescription('Event name (ex: Buildmychunk Mars 2023) ?')
				.setDescriptionLocalizations({
					fr: "Nom de l'évenement (ex: Buildmychunk Mars 2023) ?",
				})
        .setRequired(true)),
  	async execute(interaction) {
		let eventName = interaction.options.getString('eventname');
		await interaction.reply(`----------------------------------------------------------------------------------------------
                                           Inscription ${eventName}
----------------------------------------------------------------------------------------------`);
		logger.log('info', `Registrations for "${eventName}" event has opened`);
	},
};
