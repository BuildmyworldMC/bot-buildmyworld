const { SlashCommandBuilder } = require('discord.js');
const BuildmychunkEvent = require('../../models/buildmychunk/event.model.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('event')
    .setDescription('Create new event')
    .addStringOption(option => option.setName('eventname')
        .setDescription('Event name (ex: buildmychunk-YYYY-MM) ?')
        .setRequired(true)),
  async execute(interaction) {
		let eventName = interaction.options.getString('eventname');

    interaction.client.eventsBuildmychunk = [new BuildmychunkEvent(eventName)];
    await interaction.reply(`Création de l'événement Buildmychunk ${eventName}, l'ajout des participations se fera avec la commande : \n \`/vote ${eventName} <nom des participant(s)>\``);
  },
};
