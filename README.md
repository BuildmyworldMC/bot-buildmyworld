# Bot BuildMyWorld

## Usage

### Miscellaneous

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| hello | bonjour | | Display hello message | Everyone |
| help | aide | | Display message for contact discord Staff for problem | Everyone |
| socials | reseaux | | Display socials networks informations | Everyone |
| server | serveur | | Display server informations | Everyone |

### Quickerz

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| availabilities | dispo | `<weekmode>`, `<weekendmode>`, `<weektime>`, `<weekendtime>` | Display availabilities pickers | Staff |
| ping-record | ping-tournage | | Displays a message indicating the start of a shoot to Quickerz and Builders | Staff |
| wiki | lore | | Display project wiki for lore | Everyone |

### Buildmychunks

| Cmd | Alias | Args | Description | Access level |
|-----|-------|------|-------------|:------------:|
| registration | inscription | `<eventname>`| Opens registrations for an event | Staff |
| event | | `<eventname>` | Create event with event name given | Staff |
| vote | | `<eventname>`, `<participantname>` | Create vote for event with participant name given | Staff |
| result | resultat | `<eventname>` | Compute and display result for event name given | Staff |
| rules | regles | | Display rules for explain vote event system | Everyone |

## Configuration

1. retrieve dependancies with command: `yarn` in console to level of `package.json` file
2. Duplicate `.env.example` file for create `.env` file
3. Add configuration in `.env` file with your discord data (available on discord and https://discord.com/developers) and defined bot env (`local` or `production`)
4. (*Optional only if commands list changes*) Execute command: `yarn run deploy-commands` in console to level of `package.json`
5. Execute command: `yarn start` in console to level of `package.json` file

## For dev

Prerequisites to have on your PC

* NodeJS ^20.x
* Npm ^10.x

After retrieve prerequisites, see instructions in **Configuration** section and after **Usage**.

Enjoy
