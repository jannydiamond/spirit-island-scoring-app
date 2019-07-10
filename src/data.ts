import { Game } from "./types";
import { MapType } from './enums/MapType';
import { Board } from './enums/Board';

export const Games: Game[] = [{
  id: 1,
  date: '20.04.2019',
  players: [{
    id: 1,
    name: 'Player 1',
    spirit: {
      id: 'RG',
      name: 'Rampend Green'
    },
    board: Board.A
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'L',
      name: 'Lightning'
    },
    board: Board.C
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'TS',
      name: 'Thunderspeaker'
    },
    board: Board.B
  }
  ],
  difficulty: 4,
  scoring: 52,
  mapType: MapType.normal,
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
    board: Board.B
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'L',
      name: 'Lightning'
    },
    board: Board.C
  }],
  difficulty: 6,
  scoring: 37,
  mapType: MapType.normal,
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
    board: Board.C
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'S',
      name: 'Serpent'
    },
    board: Board.A
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'TS',
      name: 'Thunderspeaker'
    },
    board: Board.D
  }
  ],
  difficulty: 3,
  scoring: 43,
  mapType: MapType.special,
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