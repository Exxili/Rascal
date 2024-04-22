// import { CommandInteraction, SlashCommandBuilder } from 'discord.js'

import { Client, CacheType, CommandInteraction } from 'discord.js'
import { Command } from '../interfaces/command'

// /**
//  * Ping Command
//  * Responds with Pong
//  */
// const Ping = {
//   data: new SlashCommandBuilder()
//     .setName('ping')
//     .setDescription('Replies with Pong'),
//   async execute (interaction: CommandInteraction) {
//     await interaction.reply('Pong')
//   }
// }

// export default Ping

export const Ping: Command = {
  run: async (client: Client<boolean>, interaction: CommandInteraction<CacheType>) => {
    const content = 'Pong!'

    await interaction.followUp({
      ephemeral: true,
      content
    })
  },
  description: 'Replies with Pong',
  name: 'ping'
}
