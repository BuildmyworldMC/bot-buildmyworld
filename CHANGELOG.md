# Changelog

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
