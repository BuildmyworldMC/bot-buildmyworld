const { Command } = require('discord.js-commando');

module.exports = class QuickerzCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'dispo',
			memberName: 'dispo',
			group: 'quickerz',
			aliases: [],
			description: 'Affiche le message demandant les disponibilités des Quickerz',
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 60,
      },
			args: [
				{
					key: 'weekMode',
					prompt: 'Demander les disponibilités pour la semaine ?',
					type: 'boolean',
					default: false
				},
        {
					key: 'weekendMode',
					prompt: 'Demander les disponibilités pour la weekend ?',
					type: 'boolean',
					default: false
				},
				{
					key: 'weekTime',
					prompt: 'Heure et minute pour la semaine ?',
					type: 'string',
				},
				{
					key: 'weekendTime',
					prompt: 'Heure et minute pour le weekend ?',
					type: 'string',
				}
			],
		});
	}

	computeFrTime(time) {
		let splitedTime = time.split('h');

		return `${parseInt(splitedTime[0]) + 6}h${splitedTime[1]}`;
	}

	async run(msg, { weekMode, weekendMode, weekTime, weekendTime }) {
		const quickerzRoleId = '668240840556019741';
		const builderRoleId = '321732484398055435';
		const apprenticeBuilderRoleId = '807391085638189147';

    let content = `<@&${quickerzRoleId}> <@&${builderRoleId}> <@&${apprenticeBuilderRoleId}> Quels sont vos disponibilités`;

    if (weekMode) {
      content += ` pour la semaine a ${this.computeFrTime(weekTime)} :flag_fr: (${weekTime} :flag_ca:) ?`;
    }

    if (weekMode && weekendMode) {
      content += ` (W pour mercredi). Et`;
    }

    if (weekendMode) {
      content += ` pour le weekend dès ${this.computeFrTime(weekendTime)} :flag_fr: (${weekendTime} :flag_ca:) ?`;
    }

    const replyMsg = await msg.say(content);

		if (weekMode) {
			replyMsg.react('🇱');
			replyMsg.react('🇲');
			replyMsg.react('🇼');
			replyMsg.react('🇯');
			replyMsg.react('🇻');
		}

		if (weekendMode) {
			replyMsg.react('🇸');
			replyMsg.react('🇩');
		}
	}
};
