interface SwapiBase<T> {
  count: number
  next: string
  previous: null
  results: T[]
}

export type SwapiPerson = {
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: number
  homeworld: string
  mass: number
  name: string
  skin_color: string
  created: string
  edited: string
  species: string[]
  starships: string[]
  url: string
  vehicles: string[]
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
