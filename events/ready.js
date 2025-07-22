import logger from '../logger.js';

export const name = 'ready';
export const once = true;
export function execute(client) {
	// Init events dictionary
	client.events = {};

	logger.info('--------------START--------------');
	logger.info(`Ready! Logged in as ${client.user.tag}`);
}
