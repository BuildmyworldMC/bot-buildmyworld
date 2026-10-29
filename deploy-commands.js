import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import { config } from 'dotenv';

import logger from './logger.js';

const env = config().parsed;

const commands = [];
const commandsPath = join(dirname(fileURLToPath(import.meta.url)), 'commands');
const commandFiles = [];

readdirSync(commandsPath).forEach(folderName => {
	readdirSync(join(commandsPath, folderName)).forEach(fileName => {
		if (fileName.endsWith('.js')) {
			commandFiles.push(`${folderName}/${fileName}`);
		}
	});
});

for (const file of commandFiles) {
	const filePath = join(commandsPath, file);
	const commandModule = await import(pathToFileURL(filePath).href);
	const command = commandModule.default || commandModule;
	commands.push(command.data.toJSON());
}

const rest = new REST().setToken(env.BOT_TOKEN);
try {
	await rest.put(Routes.applicationGuildCommands(env.BOT_CLIENT_ID, env.BOT_GUILD_ID), { body: commands });
	logger.info('Successfully registered application commands.');
} catch (error) {
	logger.error('Failed to register application commands.', { error });
	process.exitCode = 1;
}
