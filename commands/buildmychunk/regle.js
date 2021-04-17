const { Command } = require('discord.js-commando');

module.exports = class BuildmychunkRulesCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'regle',
			memberName: 'regle',
			group: 'buildmychunk',
			aliases: ['rules'],
			description: "Affiche les règles pour voter lors d'un événement Buildmychunk",
			clientPermissions: ['SEND_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 60,
      }
		});
	}

	async run(msg) {
    msg.say("Pour voter : 1️⃣ = 1 pt, 2️⃣ = 2pts, 3️⃣ = 3pts, 4️⃣ = 4pts, 5️⃣ = 5pts \n⚠️ 1 seul vote par personne et seulement les participants pour l'instant ! Et interdit de voter pour soit !");
	}
};
