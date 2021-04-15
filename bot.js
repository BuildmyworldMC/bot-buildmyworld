const CommandoClient = require('./client');

const client = new CommandoClient({
	commandPrefix: '?',
	owner: 'id',
  disableMentions: 'everyone'
});

client.registry
    .registerDefaultTypes()
    .registerGroups([])
;

client.once('ready', () => {
    console.log(`Je suis prêt !`);
});

client.on('error', console.error);

client.login('TOKEN');
