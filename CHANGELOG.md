# Changelog

v2.6.1
------
- Updated: Migrate Yarn to NPM for use audit fix module
- Updated: Update all dependencies


v2.6.0
------
- Added: Command `/wiki` to display project wiki for lore
- Updated: Improve `/server` command message for update supported versions and add server page link in website
- Updated: Review typo in many commands for cleanup
- Fixed: invalid command name for restrict `/ping-record` command usage to specific access level


v2.5.5
------
- Updated: Added icons in ping record message on use /ping-record command
- Updated: Update all dependencies
- Updated: Improve code reading in all commands files
- Fixed: Unknowns interactions on use availabilities and vote commands


v2.5.4
------
- Updated: Remove Utip in `/socials` because this project is end


v2.5.3
------
- Updated: Update NodeJS minimal version required (^18 to ^20)
- Fixed: Command `/ping-record` failed on execute


v2.5.2
------
- Updated: Command `/record` is now renamed `/ping-record` for simplicity
- Updated: Added alias for command `/ping-record` in readme
- Fixed: Command `/ping-record` file is bad formed and break command execution and commands deployments


v2.5.1
------
- Updated: Command `/ping-record` is now renamed `/record` for simplicity


v2.5.0
------
- Added : Command `/ping-record` for display record start
- Fixed : Command `/registration` is not restricted for Staff role


v2.4.1
------
- Updated: Update project version to 1.20.1 in `/server` command
- Updated: Update all dependencies


v2.4.0
------
- Added: Command `/registration` for open event registration
- Fixed: Remove useless args for `/hello` command in readme


v2.3.1
------
- Added: Command `yarn deploy-commands` in package.json for deploy bot commands
- Updated: Update NodeJS minimal version required (^16 to ^18)


v2.3.0
------
- Added: Save logs in file for improve logging system for fix and debug errors
- Fixed: bad typo in message displayed on use rules command


v2.2.2
------
- Updated: Update all dependencies
- Fixed: "undici" Dependancy vulnerability


v2.2.1
------
- Updated: Update discord.js and @discordjs/rest versions


v2.2.0
------
- Added: Some commands are now restricted to certain roles
- Fixed: Votes are no longer counted when retrieving the ranking


v2.1.2
------
- Fixed: Error `unknow interaction` on use `/result` command


v2.1.1
------
- Updated: Update project version to 1.19.2 in server command
- Updated: Bump minimal version of node in requirement to ^16.x


v2.1.0
------
- Added: Logging system for improve error debug and log all actions


v2.0.2
------
- Updated: Updated all dependencies versions


v2.0.1
------
- Updated: Refactor events management for support crud event on multiple events
- Fixed: It is possible to erase an event by creating it and causing potential problems


v2.0.0
------
- Refactor bot for new bot structure and use slash command
- Added: Localize commands (English, French)
- Updated: update project version to 1.19.0 in server command
- Fixed: Error on use `/vote` and `/result` command for undefined event


v1.0.4
------
- Added : Usage section in readme for list all commands
- Updated : Reorder readme for better UX
- Fixed: Dependancies vulnerabilities


v1.0.3
------
- Added: add apprentice builder role in quickerz availabilities cmd
- Updated: update project version to 1.17.1 in minecraft command
- Fixed: `?vote` message for execute command is delete, render is bad if use this command with join image


v1.0.2
------
- Added: `npm start` shortcut in package.json for start bot more easily
- Added: message send by user for execute command is delete after 500 ms for keep chat clean
- Added: `?server` for display server IP, version and restriction
- Fixed: missing commands prefix in README


v1.0.1
-------
- Fixed: dispo cmd not mentionning role on post message
- Fixed: use `?dispo` cmd only for weekend display note for week mode in message


v1.0.0
-------
- Bot creation from zero
- Added many commands
 - Buildmychunk group (`?event` / `?regle` / `?resultat` / `?vote`)
 - Quickerz group (`?dispo`)
 - Divers group (`?bonjour` / `?aide` / `?reseaux`)
