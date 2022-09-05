const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setNameLocalizations({
			fr: 'regles',
		})
		.setDescription('Displays system rules for events')
		.setDescriptionLocalizations({
			fr: 'Affiche les regles du système pour les événements',
		}),
	async execute(interaction) {
		interaction.client.eventsBuildmychunk = [new BuildmychunkEvent(eventName)];
		await interaction.reply("Pour voter : 1️⃣ = 1 pt, 2️⃣ = 2pts, 3️⃣ = 3pts, 4️⃣ = 4pts, 5️⃣ = 5pts \n⚠️ 1 seul vote par personne et seulement les participants pour l'instant ! Et interdit de voter pour soit !");
	},
};
