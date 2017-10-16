export const shuffle = cards => ({
  type: 'SHUFFLE',
  cards
})

export const startGame = () => ({
  type: 'START_GAME'
})

export const anteUp = () => ({
  type: 'ANTE_UP',
})

export const placeBet = (playerBet=0) => ({
  type: 'PLACE_BET',
  playerBet
})

export const settleUp = () => ({
  type: 'SETTLE_UP',
})

export const nextHand = () => ({
  type: 'NEXT_HAND',
})