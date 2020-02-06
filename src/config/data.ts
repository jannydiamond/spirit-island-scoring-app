import * as types from 'types'

export const Games: types.Games = [{
  id: 1,
  date: '20.04.2019',
  players: [{
    id: 1,
    name: 'Player 1',
    spirit: {
      id: 'RG',
      name: 'Rampend Green'
    },
    board: 'A'
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'L',
      name: 'Lightning'
    },
    board: 'C'
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'TS',
      name: 'Thunderspeaker'
    },
    board: 'B'
  }
  ],
  difficulty: 4,
  scoring: 52,
  mapType: 'normal',
  adversary: {
    id: 1,
    name: 'Brandenburg-Preußen',
    level: 3
  },
  blightCard: true,
  eventDeck: true,
  blightToken: 11,
  dahan: 13,
  explorerCards: 2
}, {
  id: 2,
  date: '21.04.2019',
  players: [{
    id: 1,
    name: 'Player 1',
    spirit: {
      id: 'R',
      name: 'River'
    },
    board: 'B'
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'L',
      name: 'Lightning'
    },
    board: 'C'
  }],
  difficulty: 6,
  scoring: 37,
  mapType: 'normal',
  adversary: {
    id: 1,
    name: 'Brandenburg-Preußen',
    level: 3
  },
  blightCard: true,
  eventDeck: true,
  blightToken: 8,
  dahan: 12,
  explorerCards: 4
},
{
  id: 3,
  date: '29.04.2019',
  players: [{
    id: 1,
    name: 'Player 1',
    spirit: {
      id: 'RG',
      name: 'Rampend Green'
    },
    board: 'C'
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'S',
      name: 'Serpent'
    },
    board: 'A'
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'TS',
      name: 'Thunderspeaker'
    },
    board: 'D'
  }
  ],
  difficulty: 3,
  scoring: 43,
  mapType: 'special',
  adversary: {
    id: 1,
    name: 'Brandenburg-Preußen',
    level: 3
  },
  scenario: {
    id: 1,
    name: 'Scenario Name',
    level: 1
  },
  blightCard: true,
  eventDeck: true,
  blightToken: 14,
  dahan: 15,
  explorerCards: 3
}]

export const Expansions: types.Expansions = [
  {
    id: "core",
    name: "Spirit Island Core Game",
    selected: false
  },
  {
    id: "bac",
    name: "Branch and Claws",
    selected: true
  },
  {
    id: "promo1",
    name: "Promo Spirits 1",
    selected: false
  }
]
