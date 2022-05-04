import { render, screen } from '@testing-library/react'

import SimilarMovies from '.'

describe('<SimilarMovies />', () => {
  it('should render the heading', () => {
    const { container } = render(<SimilarMovies />)

    expect(screen.getByRole('heading', { name: /SimilarMovies/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
