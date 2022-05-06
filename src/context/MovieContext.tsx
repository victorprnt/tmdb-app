import { createContext, ReactNode, useState } from 'react'
import {
  fetchUpcomingMovies,
  fetchTrendingMovies,
  fetchMovieDetail,
  fetchCredits
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

export type MovieCastProps = {
  id: number
  name: string
  profile_path: string
}

export type MovieCrewProps = {
  id: number
  name: string
  department: string
  profile_path: string
  job: string
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
  // social: SocialProps[]
}

interface MovieContextData {
  movies: MovieCardProps[]
  upcomingMovies: UpcomingMovieProps[]
  movieDetail: MovieDetailProps
  casting: MovieCastProps[]
  getTrendingMovies: (page: number) => void
  getUpcomingMovies: () => void
  getMovieDetails: (movieId: string) => void
  getCredits: (movieId: string) => void
}

interface MovieProviderProps {
  children: ReactNode
}

export const MovieContext = createContext({} as MovieContextData)

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<MovieCardProps[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieProps[]>([])
  const [casting, setCasting] = useState<MovieCastProps[]>([])
  const [crew, setCrew] = useState<MovieCrewProps[]>([])
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
    const { data } = await fetchMovieDetail(movieId)
    setMovieDetail(data)
    console.log('movieDetail')
    console.table(movieDetail)
  }

  async function getCredits(movieId: string) {
    const { data } = await fetchCredits(movieId)
    setCasting(data.cast)
    console.log('casting')
    console.log(casting)
    setCrew(data.crew)
    console.log('crew')
    console.log(crew)
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        upcomingMovies,
        movieDetail,
        casting,
        getTrendingMovies,
        getUpcomingMovies,
        getMovieDetails,
        getCredits
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
