export type Game = {
  id: number,
  date: string,
  players: Player[],
  difficulty: number,
  scoring: number
}

export type Player = {
  id: number,
  name: string,
  spirit: Spirit
}

export type Spirit = {
  id: string,
  name: string
}