export interface ISpecie {
  name: string
  classification: string
  homeworld: {
    name: string
  }
}

export interface IFilm {
  title: string
  director: string
  releaseDate: string
  id: string
  speciesConnection: {
    species: ISpecie[]
  }
}

export const ALL_MOVIES = `
  query {
    allFilms {
      films {
        title
        director
        releaseDate
        id
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }`