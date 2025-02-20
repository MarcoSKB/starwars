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

export interface SwapiPersonList extends SwapiBase<SwapiPerson> {}

export type SwapiPlanet = {
  climate: string
  created: string
  diameter: string
  edited: string
  films: string[]
  gravity: number
  name: string
  orbital_period: string
  population: string
  residents: string[]
  rotation_period: string
  surface_water: number
  terrain: string
  url: string
}

export interface SwapiPlanetList extends SwapiBase<SwapiPlanet> {}

export type SwapiFilm = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: string[]
  starships: string[]
  vehicles: string[]
  characters: string[]
  planets: string[]
  url: string
  created: string
  edited: string
}

export interface SwapiFilmList extends SwapiBase<SwapiFilm> {}

export type SwapiVehicle = {
  cargo_capacity: number
  consumables: string
  cost_in_credits: number
  created: string
  crew: number
  edited: string
  length: number
  manufacturer: string
  max_atmosphering_speed: number
  model: string
  name: string
  passengers: number
  pilots: string[]
  films: string[]
  url: string
  vehicle_class: string
}

export interface SwapiVehicleList extends SwapiBase<SwapiVehicle> {}

export interface StorePlanetType
  extends Pick<
    SwapiPlanet,
    | 'name'
    | 'terrain'
    | 'climate'
    | 'rotation_period'
    | 'population'
    | 'diameter'
  > {
  id: number
}

export interface StoreFilmType
  extends Pick<SwapiFilm, 'title' | 'director' | 'producer' | 'release_date'> {
  id: number
}

export interface StoreVehicleType
  extends Pick<
    SwapiVehicle,
    | 'name'
    | 'model'
    | 'vehicle_class'
    | 'crew'
    | 'passengers'
    | 'cargo_capacity'
    | 'cost_in_credits'
  > {
  id: number
}

export interface StorePersonType
  extends Pick<
    SwapiPerson,
    | 'name'
    | 'birth_year'
    | 'gender'
    | 'hair_color'
    | 'height'
    | 'mass'
    | 'homeworld'
  > {
  id: number
}

export type SwapiEntities = {
  planets: StorePlanetType
  films: StoreFilmType
  vehicle: StoreVehicleType
  people: StorePersonType
}

export type EntityType = keyof SwapiEntities

export type SwapiState = {
  [K in keyof SwapiEntities]: SwapiEntities[K][]
}

export type EntityPayload<T extends EntityType> = {
  entityType: T
  data: SwapiEntities[T]
}

export interface AuthState {
  isAuthenticated: boolean
}
