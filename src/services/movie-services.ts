import { api } from './api'

export async function getTrendingMovies(pageNumber: number) {
  try {
    const { data, status } = await api.get(
      `/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&sort_by=popularity.desc&page=${pageNumber}`
    )
    return { data, status }
  } catch (error) {
    return { error }
  }
}
