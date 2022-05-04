import { createContext, ReactNode, useState } from 'react'
import { getTrendingMovies } from '../services/movie-services'

export type MovieCardProps = {
  id: number
  title: string
  poster_path: string
  release_date: string
  backdrop_path: string
  runtime: number
  size: 'normal' | 'large' | 'highlight'
}

interface MovieContextData {
  movies: MovieCardProps[]
  fetchTrendingMovies: (page: number) => void
}

interface MovieProviderProps {
  children: ReactNode
}

export const MovieContext = createContext({} as MovieContextData)

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<MovieCardProps[]>([])

  async function fetchTrendingMovies(page: number) {
    const { data } = await getTrendingMovies(page)
    setMovies(data.results)
    console.log(movies)
  }

  return (
    <MovieContext.Provider value={{ movies, fetchTrendingMovies }}>
      {children}
    </MovieContext.Provider>
  )
}
