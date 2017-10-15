export const shuffle = cards => ({
  type: 'SHUFFLE',
  cards
})

export const startGame = () => ({
  type: 'START_GAME'
})

export const anteUp = (playerBet, playerStack) => ({
  type: 'ANTE_UP',
  playerBet,
  playerStack
})