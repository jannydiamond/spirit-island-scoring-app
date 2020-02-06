import { main } from "themes"

export type Theme = typeof main

export type MapType = 'normal' | 'special'

export type Board = 'A' | 'B' | 'C' | 'D'

export type Spirit = {
  id: string,
  name: string
}

export type Adversary = {
  id: number,
  name: string,
  level: number
}

export type Scenario = {
  id: number,
  name: string,
  level: number
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
  selected: boolean
}

export type Expansions = Expansion[]
