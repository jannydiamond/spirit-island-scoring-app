import { Game } from "./types";

export const Games: Game[] = [{
  id: 1,
  date: '20.04.2019',
  players: [{
    id: 1,
    name: 'Player 1',
    spirit: {
      id: 'RG',
      name: 'Rampend Green'
    }
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'L',
      name: 'Lightning'
    }
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'TS',
      name: 'Thunderspeaker'
    }
  }
  ],
  difficulty: 4,
  scoring: 52
}, {
  id: 2,
  date: '21.04.2019',
  players: [{
    id: 1,
    name: 'Player 1',
    spirit: {
      id: 'R',
      name: 'River'
    }
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'L',
      name: 'Lightning'
    }
  }],
  difficulty: 6,
  scoring: 37
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
    }
  }, {
    id: 2,
    name: 'Player 2',
    spirit: {
      id: 'S',
      name: 'Serpent'
    }
  }, {
    id: 3,
    name: 'Player 3',
    spirit: {
      id: 'TS',
      name: 'Thunderspeaker'
    }
  }
  ],
  difficulty: 3,
  scoring: 43
}]