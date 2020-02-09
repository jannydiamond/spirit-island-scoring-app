import * as types from 'types'

export const branchAndClawData: types.ExpansionData = {
  id: 'BAC',
  name: 'Branch And Claw',
  spirits: [
    {
      id: 'SharpFangsBehindTheLeaves',
      shortName: 'SF',
      imgUrl: '',
      name: 'Sharp Fangs Behind The Leaves',
      complexity: 'moderate',
      expansion: 'BAC',
    },
    {
      id: 'KeeperOfTheForbiddenWilds',
      shortName: 'K',
      imgUrl: '',
      name: 'Keeper Of The Forbidden Wilds',
      complexity: 'moderate',
      expansion: 'BAC',
    },
  ],
  adversaries: [
    {
      id: 'France',
      name: 'The Kingdom Of France (Plantation Colony)'
    },
  ],
  scenarios: [
    {
      id: 'SecondWave',
      name: 'Second Wave',
      difficulty: 1
    },
    {
      id: 'PowersLongForgotten',
      name: 'Powers Long Forgotten',
      difficulty: 1
    },
    {
      id: 'WardTheShores',
      name: 'Ward The Shores',
      difficulty: 2
    },
    {
      id: 'RitualsOfTheDestroyingFlame',
      name: 'Rituals Of The Destroying Flame',
      difficulty: 3
    },
  ],
}
