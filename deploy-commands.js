const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = [];

fs.readdirSync(commandsPath).forEach(folderName => {
	fs.readdirSync(path.join(commandsPath, folderName)).forEach(fileName => {
		if (fileName.endsWith('.js')) {
			commandFiles.push(`${folderName}/${fileName}`);
		}
	});
});

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(env.BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(env.BOT_CLIENT_ID, env.BOT_GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
