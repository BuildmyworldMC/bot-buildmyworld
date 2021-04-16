const { Command } = require('discord.js-commando');
const Discord = require('discord.js')

module.exports = class SocialsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'reseaux',
			memberName: 'socials',
			group: 'miscellaneous',
			aliases: ['socials', 'site', 'youtube', 'instagram', 'facebook', 'twitter', 'discord', 'utip', 'liens'],
			description: 'Affiche les réseaux du projet (youtube, site web, facebook, ...)',
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
    	.setTitle(`Réseaux du projet`)
			.setDescription(`:link: Discord : https://discord.gg/taCzCMe
:link: Site web : https://buildmyworld.fr/
:link: Youtube : https://www.youtube.com/channel/UCJxUW2ac4Kf7DWK9puSqBqg
:link: Utip : https://utip.io/buildmyworld
:link: Twitter : https://twitter.com/BuildMyWorld1
:link: Facebook : https://www.facebook.com/buildmyworld/
:link: Instagram : https://www.instagram.com/teambuildmyworld`);

    msg.say(embed);
	}
};
