const { Command } = require('discord.js-commando');

module.exports = class BuildmychunkResultCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'resultat',
			memberName: 'result',
			group: 'buildmychunk',
			aliases: ['classement', 'podium', 'score'],
			description: "Affiche le résultat de l'événement ciblé",
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
          validate: eventName => {
            return /^buildmychunk-[0-9]{4}-[0-9]{2}$/i.test(eventName);
          }
				}
			],
		});
	}

	async run(msg, { eventName }) {
    msg.say(this.client.eventsBuildmychunk[0].computeResult());
	}
};
