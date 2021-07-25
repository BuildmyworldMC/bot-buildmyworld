const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bonjour',
			memberName: 'hello',
			group: 'miscellaneous',
			aliases: ['salut', 'hello', 'hi'],
			description: 'Le bot dira bonjour !',
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['SEND_MESSAGES'],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 30,
      },
		});
	}

	async run(msg) {
    msg.say(`Bonjour ! Je suis ${this.client.user.tag}, le bot officiel du projet Buildmyworld !`);
	}
};
