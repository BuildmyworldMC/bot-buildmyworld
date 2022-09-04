# Bot BuildMyWorld

## Usage

### Miscellaneous

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| hello | salut, bonjour, hi | Say hello | Admin |
| help | h, aide | `<command?>` | Display global help, use `<command>` for display specific help | Admin |
| socials | reseaux, liens, site, youtube, ... | | Display socials networks informations | Admin |
| server | minecraft, ip, version, serveur | | Display server informations | Admin |

### Quickerz

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| dispo | | `<weekMode>`, `<weekendMode>`, `<weekTime>`, `<weekendTime>` | Display availabilities pickers | Admin |

### Buildmychunks

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| event | | `<eventName>` | Create event with event name given | Admin |
| vote | | `<eventName>`, `<participantName>` | Create vote for event with participant name given | Admin |
| result | resultat, classement, podium, score | `<eventName>` | Compute and display result for event name given | Admin |
| rules | regle | | Display rules for explain vote event system | Admin |

## Configuration

1. retrieve dependancies with command: `yarn` in console to level of `package.json` file
2. Duplicate `.env.example` file for create `.env` file
3. Add configuration in `.env` file with your discord data (available on discord and https://discord.com/developers)
4. Execute command: `node index.js` in console to level of `index.js` file

## For dev

Prerequisites to have on your PC

* NodeJS ^15.x
* Yarn ^1.0.

After retrieve prerequisites, see instructions in **Configuration** section and after **Usage**.

Enjoy
