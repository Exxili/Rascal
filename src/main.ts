import dotenv from 'dotenv'
import { Client, ClientOptions, GatewayIntentBits, Partials } from 'discord.js'
// import { readCommands } from './functions/read-commands'
// import { deployGlobalCommands } from './funcions/deploy-global-commands'
import ready from './events/ready'
import interactionCreate from './events/interactionCreate'

let DiscordClient: Client

/**
 * Discord Clients connection options
 */
const DiscordClientOptions: ClientOptions = {
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.Guilds
  ]
}

/**
 * The main entry point of Exxili Discord Bot
 */
const main = async () => {
  // Grab Environment Variables
  dotenv.config()

  // Local Vars
  const DISCORDTOKEN = process.env.DISCORD_TOKEN
  // const DISCORDCLIENTID = process.env.DISCORD_ID

  // Initialize the Discord Client
  DiscordClient = new Client(DiscordClientOptions)

  // Register any listeners
  ready(DiscordClient)
  interactionCreate(DiscordClient)

  // // Read discord global commands
  // const commands: any[] = await readCommands()

  // // Deploy all discord global commands
  // await deployGlobalCommands(DISCORDTOKEN as string, DISCORDCLIENTID as string, commands)

  // // Connect the Discord Client
  await DiscordClient.login(DISCORDTOKEN)
}

main()
