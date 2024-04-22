import { CommandInteraction } from 'discord.js'
import fs from 'node:fs'
import path from 'node:path'

// const CmdDir = 'src/commands'
const CmdDir = path.join(__dirname, '../commands')

/**
 * Reads commnads from the command folder
 * @returns An array of Converted JSON discord commands
 */
export const readCommands = async () => {
  const commands = []

  // Grab all the command files from the commands directory you created earlier
  const commandFiles = fs.readdirSync(CmdDir).filter(file => file.endsWith('.ts'))

  console.log('CommandFiles', commandFiles)

  // Grab the SlashCommandBuilder#toJSON() output of each command file
  for (const file of commandFiles) {
    console.log(file)
    const command: CommandInteraction = (await import(`${CmdDir}/${file}`))
    console.log(command)
    commands.push(command.toJSON())
  }

  return commands
}
