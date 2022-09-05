# Bot BuildMyWorld

## Usage

### Miscellaneous

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| hello | salut, bonjour, hi | Say hello | Admin |
| help | h, aide | | Display message for contact discord Staff for problem | Admin |
| socials | reseaux, liens, site, youtube, ... | | Display socials networks informations | Admin |
| server | minecraft, mc, ip, version, serveur | | Display server informations | Admin |

### Quickerz

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| dispo | | `<weekmode>`, `<weekendmode>`, `<weektime>`, `<weekendtime>` | Display availabilities pickers | Admin |

### Buildmychunks

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| event | | `<eventname>` | Create event with event name given | Admin |
| vote | | `<eventname>`, `<participantname>` | Create vote for event with participant name given | Admin |
| result | resultat, classement, podium, score | `<eventname>` | Compute and display result for event name given | Admin |
| rules | regle | | Display rules for explain vote event system | Admin |

## Configuration

1. retrieve dependancies with command: `yarn` in console to level of `package.json` file
2. Duplicate `.env.example` file for create `.env` file
3. Add configuration in `.env` file with your discord data (available on discord and https://discord.com/developers)
4. (*Optional only if commands list changes*) Execute command: `node deploy-commands.js` in console to level of `package.json`
5. Execute command: `node index.js` in console to level of `package.json` file

## For dev

Prerequisites to have on your PC

* NodeJS ^15.x
* Yarn ^1.0.

After retrieve prerequisites, see instructions in **Configuration** section and after **Usage**.

Enjoy
