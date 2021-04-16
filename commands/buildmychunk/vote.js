const { Command } = require('discord.js-commando');

module.exports = class BuildmychunkVoteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'vote',
			memberName: 'vote',
			group: 'buildmychunk',
			aliases: [],
			description: 'Affiche un message de participation pour que les gens puisse voté sur ce message',
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['SEND_MESSAGES'],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 20,
      },
			args: [
				{
					key: 'eventName',
					prompt: "Nom de l'événement (ex: buildmychunk-AAAA-MM) ?",
					type: 'string',
				},
				{
					key: 'participantName',
					prompt: "Nom du ou des participant(s) ?",
					type: 'string',
				},
			],
		});
	}

	async run(msg, { eventName, participantName }) {
    msg.say(`[${eventName}] - Participation pour ${participantName}`);
		replyMsg.react('1️⃣');
		replyMsg.react('2️⃣');
		replyMsg.react('3️⃣');
		replyMsg.react('4️⃣');
		replyMsg.react('5️⃣');
	}
};
