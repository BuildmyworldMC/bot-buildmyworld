const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x17a2b8)
	.setTitle('Réseaux du projet')
	.setDescription(`:link: Discord : https://discord.gg/taCzCMe
		:link: Site web : https://buildmyworld.fr/
		:link: Youtube : https://www.youtube.com/channel/UCJxUW2ac4Kf7DWK9puSqBqg
		:link: Utip : https://utip.io/buildmyworld
		:link: Twitter : https://twitter.com/BuildMyWorld1
		:link: Facebook : https://www.facebook.com/buildmyworld/
		:link: Instagram : https://www.instagram.com/teambuildmyworld`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('socials')
		.setDescription('Display socials links'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};
