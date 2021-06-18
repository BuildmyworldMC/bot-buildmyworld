const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class MinecraftCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'server',
			memberName: 'server',
			group: 'miscellaneous',
			aliases: ['minecraft', 'ip', 'version'],
			description: 'Affiche les détails de connexion au serveur minecraft du projet',
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
		const embed = new Discord.MessageEmbed()
			.setColor('#17a2b8')
    	.setTitle(`Serveur Minecraft`)
			.setDescription(`:link: IP : play.buildmyworld.fr
:jigsaw: Version : 1.16.2 Vanilla
:warning: Restriction : Liste blanche (whitelist) activé`);

    msg.say(embed);
	}
};
