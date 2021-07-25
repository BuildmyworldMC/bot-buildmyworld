const CommandoClient = require('./client');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env'));
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

const client = new CommandoClient({
	commandPrefix: '?',
	owner: process.env.BOT_OWNER_ID,
  disableMentions: 'everyone',
  presence: {
    activity: {
      name: `buildmyworld.fr`,
      type: 'WATCHING'
    }
  }
});

client.eventsBuildmychunk = [];

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['buildmychunk', 'Buildmychunk'], // [groupCmd, groupTitle]
    ['quickerz', 'Quickerz'],
    ['miscellaneous', 'Divers']
  ])
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  if ((message.author.id === process.env.BOT_OWNER_ID) && (message.content.startsWith('?'))) {
    message.delete({ timeout: 500 });
  }
});
