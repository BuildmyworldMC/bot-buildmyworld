const { Command } = require('discord.js-commando');

module.exports = class BuildmychunkEventCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'event',
			memberName: 'event',
			group: 'buildmychunk',
			aliases: [],
			description: "Crée un nouvel événement Buildmychunk afin d'ajouter les participations par la suite",
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
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
    this.client.eventsBuildmychunk = [new BuildmychunkEvent(eventName)];

    msg.say(`Création de l'événement Buildmychunk ${eventName}, l'ajout des participations se fera avec la commande : \n \`?vote ${eventName} <nom des participant(s)>\``);
	}
};

class BuildmychunkEvent {
  constructor (eventName)
  {
    this.title = eventName;
    this.participations = [];
  }

  computeResult() {
		let participations = this.participations;

    participations.forEach((participation) => {
      participation.score = participation.computeScore();
    });

    participations.sort((firstParticipation, secondParticipation) => {
			return secondParticipation.score > firstParticipation.score ? 1 : -1;
		});

    let result = `Résultat de l'événement ${this.title}`;

    participations.forEach((participation) => {
      result += `\n${participation.name} : ${participation.score} pt${participation.score > 1 ? 's' : ''}`;
    });

    return result;
  }
}
