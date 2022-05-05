import { createContext, ReactNode, useState } from 'react'
import {
  fetchUpcomingMovies,
  fetchTrendingMovies,
  fetchMovieDetail
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

type MovieGenreProps = {
  id: number
  name: string
}

export type MovieDetailProps = {
  id: number
  title: string
  release_date: string
  poster_path: string
  backdrop_path: string
  original_title: string
  overview: string
  runtime: number
  genres: MovieGenreProps[]
  // cast: CastProps[];
  // crew: CrewProps[];
  // social: SocialProps[];
}

interface MovieContextData {
  movies: MovieCardProps[]
  upcomingMovies: UpcomingMovieProps[]
  movieDetail: MovieDetailProps
  getTrendingMovies: (page: number) => void
  getUpcomingMovies: () => void
  getMovieDetails: (movieId: string) => void
}

interface MovieProviderProps {
  children: ReactNode
}

export const MovieContext = createContext({} as MovieContextData)

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<MovieCardProps[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieProps[]>([])
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps>({
    id: 0,
    title: '',
    release_date: '',
    poster_path: '',
    backdrop_path: '',
    original_title: '',
    overview: '',
    runtime: 0,
    genres: []
  })

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

  async function getMovieDetails(movieId: string) {
    console.table(movieId)
    const { data } = await fetchMovieDetail(movieId)
    setMovieDetail(data)
    console.log('movieDetail')
    console.table(movieDetail)
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        upcomingMovies,
        movieDetail,
        getTrendingMovies,
        getUpcomingMovies,
        getMovieDetails
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
