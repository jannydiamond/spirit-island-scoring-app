import { main } from "themes"

export type Theme = typeof main

export type MapType = 'normal' | 'special'

export type Board = 'A' | 'B' | 'C' | 'D'

export type Spirit = {
  id: string
  shortName: string
  imgUrl: string
  name: string
  complexity: string
  expansion: string
}

export type Spirits = {
  [id: string]: Spirit
}

export type Adversary = {
  id: string
  name: string
}

export type Adversaries = {
  [id: string]: Adversary
}

export type AdversaryLevel = 1 | 2 | 3 | 4 | 5 | 6

export type Scenario = {
  id: string
  name: string
  difficulty: number
}

export type Scenarios = {
  [id: string]: Scenario
}

export type Player = {
  id: number,
  name: string,
  spirit: Spirit,
  board: Board
}

export type Game = {
  id: number,
  date: string,
  players: Player[],
  difficulty: number,
  scoring: number,
  mapType: MapType,
  adversary?: Adversary,
  adversaryLevel?: number,
  scenario?: Scenario,
  blightCard: boolean,
  eventDeck: boolean,
  blightToken: number,
  dahan: number,
  explorerCards: number
}

export type Games = Game[]

export type Expansion = {
  id: string
  name: string
}

export type Expansions = {
  [id: string]: Expansion
}

export type SelectedExpansion = Expansion & {
  selected: boolean
}

export type SelectedExpansions = {
  [id: string]: SelectedExpansion
}

export type ExpansionData = {
  id: string
  name: string
  spirits: Spirit[]
  adversaries: Adversary[]
  scenarios: Scenario[]
}

export type ExpansionsData = {
  [id: string]: ExpansionData
}

export type NormalizedData = {
  expansions: Expansions
  spirits: Spirits
  adversaries: Adversaries
  scenarios: Scenarios
  expansionIds: string[]
  spiritIds: string[]
  adversaryIds: string[]
  scenarioIds: string[]
}
