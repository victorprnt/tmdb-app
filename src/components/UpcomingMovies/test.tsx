import { render, screen } from '@testing-library/react'

import UpcomingMovies from '.'

describe('<UpcomingMovies />', () => {
  it('should render the heading', () => {
    const { container } = render(<UpcomingMovies />)

    expect(screen.getByRole('heading', { name: /UpcomingMovies/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
