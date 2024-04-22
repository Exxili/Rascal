import { REST, Routes } from 'discord.js'

/**
 * Deploy Global Bot Commands
 * @param token the auth token
 * @param clientId the discord client id
 * @param commands the commands
 */
export const deployGlobalCommands = async (token: string, clientId: string, commands: any[]) => {
  // Create an instance of the REST Module
  const rest = new REST({ version: '10' }).setToken(token)

  // Deploy the commands
  console.log(`Started deploying ${commands.length} application (/) commands.`)

  try {
    // The Put method is used to refresh all commands
    // related to the bot
    const data: any = await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands }
    )

    console.log(`Successfully deployed ${data.length} application (/) commands.`)
  } catch (error) {
    console.error(error)
  }
}
