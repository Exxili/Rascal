
import { Client, CacheType, CommandInteraction, Message } from 'discord.js'
import { Command } from '../interfaces/command'

export const Trivia: Command = {
  name: 'trivia',
  description: 'Starts a trivia game',
  run: async (client, interaction) => {
    // Start the trivia game
    await startTrivia(client, interaction)
  }
}

const triviaQuestions = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What year did the Titanic sink?', answer: '1912' }
  // Add more questions as needed
]

async function startTrivia (client: Client<boolean>, interaction: CommandInteraction<CacheType>) {
  if (!interaction.channel) {
    await interaction.reply('This command can only be used in a channel.')
    return
  }

  let score = 0

  for (const item of triviaQuestions) {
    await interaction.followUp({ content: item.question })
    const filter = (m: Message) => m.author.id === interaction.user.id

    try {
      const collected = await interaction.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
      const response = collected.first()

      if (response && response.content.toLowerCase() === item.answer.toLowerCase()) {
        score += 10
        await interaction.followUp({ content: 'Correct!' })
      } else {
        await interaction.followUp({ content: `Wrong! The correct answer was ${item.answer}` })
      }
    } catch (error) {
      await interaction.followUp({ content: 'You did not answer in time!' })
    }
  }

  await interaction.followUp({ content: `Game over! Your final score is ${score}.` })
}
