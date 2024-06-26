import { Client } from 'discord.js'
import { Commands } from '../commands'

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return
    }

    // Register All Slash Commands
    await client.application.commands.set(Commands)

    console.log(`${client.user.username} is online`)
  })
}
