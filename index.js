import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

import logger from './logger.js';

const env = config().parsed;
const absoluteCurrentDirectoryPath = dirname(fileURLToPath(import.meta.url));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('error', (error) => {
	logger.error('Discord client error:', error);
});

client.on('shardError', (error) => {
	logger.error('A websocket connection encountered an error:', error);
});

(async () => {
	// Register commands
	client.commands = new Collection();
	const commandsPath = join(absoluteCurrentDirectoryPath, 'commands');
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
		const fileUrl = pathToFileURL(filePath).href;
		const commandModule = await import(fileUrl);
		const command = commandModule.default || commandModule;
		client.commands.set(command.data.name, command);
	}

	// Register events
	const eventsPath = join(absoluteCurrentDirectoryPath, 'events');
	const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const filePath = join(eventsPath, file);
		const fileUrl = pathToFileURL(filePath).href;
		const eventModule = await import(fileUrl);
		const event = eventModule.default || eventModule;
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		} else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	}

	client.login(env.BOT_TOKEN);
})();
