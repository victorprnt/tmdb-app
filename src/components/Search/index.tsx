import { useCallback, useContext, useState } from 'react'
import dbnc from 'lodash'

import { MovieContext } from '../../context/MovieContext'
import * as S from './styles'

const Search = () => {
  const [query, setQuery] = useState('')
  const { getSearchResult, searchResult, handleQueryMovies } =
    useContext(MovieContext)

  function cleanQuery() {
    handleQueryMovies()
    setQuery('')
  }

  const delayQuery = useCallback(
    dbnc.debounce((searchQuery: string) => {
      // eslint-disable-next-line no-unused-expressions
      searchQuery.length > 2 ? getSearchResult(searchQuery) : cleanQuery()
    }, 1000),
    []
  )

  return (
    <S.Wrapper>
      <form action="">
        <input
          className="search"
          type="search"
          placeholder="Search"
          onChange={(e) => {
            // setQuery(e.target.value);
            delayQuery(e.target.value)
          }}
        />
      </form>

      <S.SearchList>
        {searchResult &&
          searchResult.map((searchResultMovie) => {
            return (
              <a
                key={searchResultMovie.id}
                href={`/movie/${searchResultMovie.id}`}
              >
                <img
                  src={
                    searchResultMovie.poster_path
                      ? `https://image.tmdb.org/t/p/w45${searchResultMovie.poster_path}`
                      : 'https://simpleicon.com/wp-content/uploads/film.png'
                  }
                  alt={searchResultMovie.title}
                />
                <span>{searchResultMovie.title}</span>
              </a>
            )
          })}
      </S.SearchList>
    </S.Wrapper>
  )
}

export default Search
