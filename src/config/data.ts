import * as types from 'types'

export const Games: types.Games = [{
  id: 1,
  date: '20.04.2019',
  players: [{
    id: 1,
    name: 'Player 1',
    spirit: {
      id: 'ASpreadOfRampantGreen',
      shortName: 'RG',
      imgUrl: '',
      name: 'A Spread Of Rampant Green',
      complexity: 'moderate',
      expansion: 'SI',
    },
    board: 'A'
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'LightningsSwiftStrike',
      shortName: 'L',
      imgUrl: '',
      name: 'Lightning\'s Swift Strike',
      complexity: 'low',
      expansion: 'SI',
    },
    board: 'C'
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'Thunderspeaker',
      shortName: 'TS',
      imgUrl: '',
      name: 'Thunderspeaker',
      complexity: 'moderate',
      expansion: 'SI',
    },
    board: 'B'
  }
  ],
  difficulty: 4,
  scoring: 52,
  mapType: 'normal',
  adversary: {
    id: 'BrandenburgPrussia',
    name: 'Brandenburg-Prussia',
  },
  adversaryLevel: 3,
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
      id: 'RiverSurgesInSunlight',
      shortName: 'R',
      imgUrl: '',
      name: 'River Surges In Sunlight',
      complexity: 'low',
      expansion: 'SI',
    },
    board: 'B'
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'LightningsSwiftStrike',
      shortName: 'L',
      imgUrl: '',
      name: 'Lightning\'s Swift Strike',
      complexity: 'low',
      expansion: 'SI',
    },
    board: 'C'
  }],
  difficulty: 6,
  scoring: 37,
  mapType: 'normal',
  adversary: {
    id: 'BrandenburgPrussia',
    name: 'Brandenburg-Prussia',
  },
  adversaryLevel: 3,
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
      id: 'ASpreadOfRampantGreen',
      shortName: 'RG',
      imgUrl: '',
      name: 'A Spread Of Rampant Green',
      complexity: 'moderate',
      expansion: 'SI',
    },
    board: 'C'
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'SerpentSlumberingBeneathTheIsland',
      shortName: 'S',
      imgUrl: '',
      name: 'Serpent Slumbering Beneath The Island',
      complexity: 'high',
      expansion: 'Promos',
    },
    board: 'A'
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'Thundespeaker',
      shortName: 'TS',
      imgUrl: '',
      name: 'Thundespeaker',
      complexity: 'moderate',
      expansion: 'SI',
    },
    board: 'D'
  }
  ],
  difficulty: 3,
  scoring: 43,
  mapType: 'special',
  adversary: {
    id: 'BrandenburgPrussia',
    name: 'Brandenburg-Prussia'
  },
  adversaryLevel: 3,
  scenario: {
    id: 'SecondWave',
    name: 'SecondWave',
    difficulty: 1
  },
  blightCard: true,
  eventDeck: true,
  blightToken: 14,
  dahan: 15,
  explorerCards: 3
}]
