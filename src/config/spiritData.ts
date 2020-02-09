import * as types from 'types'

import { spiritIslandData } from './DATA/spiritIsland'
import { branchAndClawData } from './DATA/branchAndClaw'
import { promosData } from './DATA/promos'

export const DATA: types.ExpansionsData = {
  SI: spiritIslandData,
  BAC: branchAndClawData,
  Promos: promosData,
}
