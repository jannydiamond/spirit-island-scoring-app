import { DATA } from 'config/spiritData'

import * as types from 'types'

const EXPANSIONS = Object.keys(DATA)

const normalize = (array: Array<any>) =>
  array.reduce(
    (acc, entity) => ({
      entities: {
        ...acc.entities,
        [entity.id]: entity,
      },
      ids: [...acc.ids, entity.id],
    }),
    {
      entities: {},
      ids: [],
    } as {
      entities: { [key: string]: Object }
      ids: string[]
    }
  )

const NORMALIZEDDATA = EXPANSIONS.reduce(
  (acc: types.NormalizedData, id: string) => {
    const expansion = DATA[id]
    const spirits = normalize(expansion.spirits)
    const adversaries = normalize(expansion.adversaries)
    const scenarios = normalize(expansion.scenarios)

    return {
      expansions: {
        ...acc.expansions,
        [id]: {
          id,
          name: expansion.name,
        },
      },
      spirits: {
        ...acc.spirits,
        ...spirits.entities,
      },
      adversaries: {
        ...acc.adversaries,
        ...adversaries.entities,
      },
      scenarios: {
        ...acc.scenarios,
        ...scenarios.entities,
      },
      expansionIds: [...acc.expansionIds, id],
      spiritIds: [...acc.spiritIds, ...spirits.ids],
      adversaryIds: [...acc.adversaryIds, ...adversaries.ids],
      scenarioIds: [...acc.scenarioIds, ...scenarios.ids],
    }
  },
  {
    expansions: {},
    spirits: {},
    adversaries: {},
    scenarios: {},
    expansionIds: [],
    spiritIds: [],
    adversaryIds: [],
    scenarioIds: [],
  } as types.NormalizedData
)

export default {
  DATA,
  NORMALIZEDDATA,
}
