module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		// Init events dictionary
		client.events = {};

		console.log(`LOG: Ready! Logged in as ${client.user.tag}`);
	},
};
