const { Command } = require('discord.js-commando');

const onePointReaction = '1️⃣',
	twoPointsReaction = '2️⃣',
	threePointsReaction = '3️⃣',
	fourPointsReaction = '4️⃣',
	fivePointsReaction = '5️⃣';

module.exports = class BuildmychunkVoteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'vote',
			memberName: 'vote',
			group: 'buildmychunk',
			aliases: [],
			description: 'Affiche un message de participation pour que les gens puisse voté sur ce message',
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
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
          validate: eventName => {
            return /^buildmychunk-[0-9]{4}-[0-9]{2}$/i.test(eventName);
          }
				},
				{
					key: 'participantName',
					prompt: "Nom du ou des participant(s) ?",
					type: 'string',
					validate: participantName => {
			      if (participantName.length < 101 && participantName.length > 1) return true;
			      return 'La valeur doit avoir au minimum 1 caractère, et maximum 100.';
			    }
				},
			],
		});
	}

	async run(msg, { eventName, participantName }) {
    const discordMessage = await msg.say(`Participation pour ${participantName}`);
		discordMessage.react(onePointReaction);
		discordMessage.react(twoPointsReaction);
		discordMessage.react(threePointsReaction);
		discordMessage.react(fourPointsReaction);
		discordMessage.react(fivePointsReaction);

		this.client.eventsBuildmychunk[0].participations.push(new BuildmychunkParticipation(participantName, discordMessage));
	}
};

class BuildmychunkParticipation {
	constructor (name, srcMessage) {
		this.name = name;
		this.srcMessage = srcMessage;
		this.score = 0;
	}

	computeScore() {
		let score = 0;

		score += this.srcMessage.reactions.cache.get(onePointReaction).count - 1; // - 1 for exclude bot reaction
		score += (this.srcMessage.reactions.cache.get(twoPointsReaction).count - 1) * 2; // * <number> for applied value of reaction in calculation
		score += (this.srcMessage.reactions.cache.get(threePointsReaction).count - 1) * 3;
		score += (this.srcMessage.reactions.cache.get(fourPointsReaction).count - 1) * 4;
		score += (this.srcMessage.reactions.cache.get(fivePointsReaction).count - 1) * 5;

		return score;
	}
}
