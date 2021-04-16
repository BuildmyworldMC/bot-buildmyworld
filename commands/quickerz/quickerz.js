const { Command } = require('discord.js-commando');

module.exports = class QuickerzCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dispo',
			memberName: 'dispo',
			group: 'quickerz',
			aliases: [],
			description: 'Displays a content requesting availability to Quickerz',
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['SEND_MESSAGES'],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 60,
      },
			args: [
				{
					key: 'weekMode',
					prompt: "Demander les disponibilités pour la semaine ?",
					type: 'boolean',
				},
        {
					key: 'weekendMode',
					prompt: "Demander les disponibilités pour la weekend ?",
					type: 'boolean',
				},
				{
					key: 'weekTime',
					prompt: "Date et heure pour la semaine ?",
					type: 'string',
				},
				{
					key: 'weekendTime',
					prompt: "Date et heure pour le weekend ?",
					type: 'string',
				}
			],
		});
	}

	computeFrTime(time) {
		let splitedTime = time.split("h");

		return `${parseInt(splitedTime[0]) + 6}h${splitedTime[1]}`;
	}

	async run(msg, { weekMode, weekendMode, weekTime, weekendTime }) {
    let content = "@Quickerz @Batisseur Quels sont vos disponibilités";

    if (weekMode) {
      content += ` pour la semaine a ${this.computeFrTime(weekTime)} :flag_fr: (${weekTime} :flag_ca:) ?`;
    }

    if (weekMode && weekendMode) {
      content += ` Et`;
    }

    if (weekendMode) {
      content += ` pour le weekend dès ${this.computeFrTime(weekendTime)} :flag_fr: (${weekendTime} :flag_ca:) ?`;
    }

    content += " (W pour mercredi)`";

    const replyMsg = await msg.say(content);

		if (weekMode) {
			replyMsg.react("🇱");
			replyMsg.react("🇲");
			replyMsg.react("🇼");
			replyMsg.react("🇯");
			replyMsg.react("🇻");
		}

		if (weekendMode) {
			replyMsg.react("🇸");
			replyMsg.react("🇩");
		}
	}
};
