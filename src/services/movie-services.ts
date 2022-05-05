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
