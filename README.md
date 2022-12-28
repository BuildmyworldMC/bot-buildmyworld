# Bot BuildMyWorld

## Usage

### Miscellaneous

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| hello | bonjour | Say hello | | Everyone |
| help | aide | | Display message for contact discord Staff for problem | Everyone |
| socials | reseaux | | Display socials networks informations | Everyone |
| server | serveur | | Display server informations | Everyone |

### Quickerz

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| availabilities | dispo | `<weekmode>`, `<weekendmode>`, `<weektime>`, `<weekendtime>` | Display availabilities pickers | Staff |

### Buildmychunks

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| event | | `<eventname>` | Create event with event name given | Staff |
| vote | | `<eventname>`, `<participantname>` | Create vote for event with participant name given | Staff |
| result | resultat | `<eventname>` | Compute and display result for event name given | Staff |
| rules | regles | | Display rules for explain vote event system | Everyone |

## Configuration

1. retrieve dependancies with command: `yarn` in console to level of `package.json` file
2. Duplicate `.env.example` file for create `.env` file
3. Add configuration in `.env` file with your discord data (available on discord and https://discord.com/developers)
4. (*Optional only if commands list changes*) Execute command: `node deploy-commands.js` in console to level of `package.json`
5. Execute command: `node index.js` in console to level of `package.json` file

## For dev

Prerequisites to have on your PC

* NodeJS ^16.x
* Yarn ^1.0.

After retrieve prerequisites, see instructions in **Configuration** section and after **Usage**.

Enjoy
