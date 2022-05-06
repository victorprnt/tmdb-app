import { api } from './api'

export async function fetchTrendingMovies(pageNumber: number) {
  try {
    const { data, status } = await api.get(
      `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&page=${pageNumber}`
    )
    return { data, status }
  } catch (error) {
    return { error }
  }
}

export async function fetchMovieDetail(movieId: string) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`
    )
    return { data, status }
  } catch (error) {
    return { error }
  }
}

export async function fetchUpcomingMovies(pageNumber = 1) {
  try {
    const { data, status } = await api.get(
      `/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&page=${pageNumber}`
    )
    return { data, status }
  } catch (error) {
    return { error }
  }
}

export async function fetchCredits(movieId: string) {
  try {
    const { data, status } = await api.get(
      `/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR`
    )
    return { data, status }
  } catch (error) {
    return { error }
  }
}

export async function fetchSearchResult(movieName: string) {
  try {
    const { data, status } = await api.get(
      `search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&query=${movieName}&page=1&include_adult=false`
    )
    return { data, status }
  } catch (error) {
    return { error }
  }
}
