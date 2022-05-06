import { useContext, useEffect, useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import { MovieContext } from '../../context/MovieContext'
import MovieCard from '../MovieCard'
import * as S from './styles'

const MovieGrid = () => {
  const { movies, highlight, getTrendingMovies, getUpcomingMovies } =
    useContext(MovieContext)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getTrendingMovies(page)
    getUpcomingMovies()
  }, [page])

  function pageForward() {
    setPage(page + 1)
  }

  // const [loading, setLoading] = useState(false)
  // const [hasNextPage, setHasNextPage] = useState(true)
  // function handleLoadMore() {
  //   setLoading(true)
  // }
  // const [sentryRef, { rootRef }] = useInfiniteScroll({
  //   loading,
  //   hasNextPage,
  //   onLoadMore: handleLoadMore
  // })

  return (
    <S.Wrapper>
      {!!highlight && (
        <MovieCard
          id={highlight.id}
          title={highlight.title}
          runtime={highlight.runtime}
          poster_path={highlight.poster_path}
          backdrop_path={highlight.backdrop_path}
          release_date={highlight.release_date}
          size="highlight"
        />
      )}
      <S.MovieGridWrapper>
        {movies.slice(1).map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              runtime={movie.runtime}
              size="normal"
              release_date={
                movie.release_date ? movie.release_date.slice(0, 4) : 'TBA'
              }
              backdrop_path={movie.backdrop_path}
              poster_path={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                  : 'https://simpleicon.com/wp-content/uploads/film.png'
              }
            />
          )
        })}
        <button className="load-more" type="button" onClick={pageForward}>
          Load More
        </button>
      </S.MovieGridWrapper>
    </S.Wrapper>
  )
}

export default MovieGrid
