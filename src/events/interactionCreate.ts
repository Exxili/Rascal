import { Client, Interaction } from 'discord.js'
import { handleSlashCommand } from '../functions/handleSlashCommand'

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      await handleSlashCommand(client, interaction)
    }
  })
}
