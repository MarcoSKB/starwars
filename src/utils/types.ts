interface SwapiBase<T> {
  count: number
  next: string
  previous: null
  results: T[]
}

export type SwapiPerson = {
  name: string
  rotation_period: number
  orbital_period: number
  diameter: number
  climate: string
  gravity: string
  terrain: string
  surface_water: number
  population: number
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export interface SwapiPeopleList extends SwapiBase<SwapiPerson> {}

export type SwapiPlanet = {
  climate: string
  created: string
  diameter: string
  edited: string
  films: string[]
  gravity: number
  name: string
  orbital_period: number
  population: number
  residents: string[]
  rotation_period: number
  surface_water: number
  terrain: string
  url: string
}

export interface SwapiPlanetList extends SwapiBase<SwapiPlanet> {}
