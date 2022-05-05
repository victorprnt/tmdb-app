import { createContext, ReactNode, useState } from 'react'
import {
  fetchUpcomingMovies,
  fetchTrendingMovies
} from '../services/movie-services'

export type MovieCardProps = {
  id: number
  title: string
  poster_path: string
  release_date: string
  backdrop_path: string
  runtime: number
  size: 'normal' | 'large' | 'highlight'
}

export type UpcomingMovieProps = {
  id: number
  title: string
  poster_path: string
  release_date: string
  backdrop_path: string
  runtime: number
  video: boolean
}

interface MovieContextData {
  movies: MovieCardProps[]
  upcomingMovies: UpcomingMovieProps[]
  getTrendingMovies: (page: number) => void
  getUpcomingMovies: () => void
}

interface MovieProviderProps {
  children: ReactNode
}

export const MovieContext = createContext({} as MovieContextData)

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<MovieCardProps[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieProps[]>([])

  async function getTrendingMovies(page: number) {
    const { data } = await fetchTrendingMovies(page)
    setMovies(data.results)
    console.log(movies)
  }

  async function getUpcomingMovies() {
    const { data } = await fetchUpcomingMovies()
    setUpcomingMovies(data.results.slice(0, 5))
    console.log('upcomingMovies')
    console.log(upcomingMovies)
  }

  return (
    <MovieContext.Provider
      value={{ movies, upcomingMovies, getTrendingMovies, getUpcomingMovies }}
    >
      {children}
    </MovieContext.Provider>
  )
}
