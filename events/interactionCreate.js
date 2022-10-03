module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

  	const command = interaction.client.commands.get(interaction.commandName);

  	if (!command) return;

		console.log(`LOG: Command /${interaction.commandName} is execute by ${interaction.user.username }#${interaction.user.discriminator}`);

  	try {
  		command.execute(interaction);
  	} catch (error) {
  		console.error(error);
  		interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  	}
	},
};
