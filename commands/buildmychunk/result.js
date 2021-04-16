const { Command } = require('discord.js-commando');

module.exports = class BuildmychunkResultCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'result',
			memberName: 'result',
			group: 'buildmychunk',
			aliases: [],
			description: 'Display resultat of votes for target event',
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['SEND_MESSAGES'],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 60,
      },
			args: [
				{
					key: 'eventName',
					prompt: "Nom de l'événement (ex: buildmychunk-YYYY-MM) ?",
					type: 'string',
				}
			],
		});
	}

	async run(msg, { eventName }) {
    msg.say(`Résultat de l'événement ${eventName} :
	1 - ORN_Fox / Cézalios 45 pts
	2 - Nasgo / MaxDesro 43 pts
	3 - Raphifola / Infernaton 41 pts
	4 - Fallecraft / LeDivineEnfant 40 pts`);
	}
};
