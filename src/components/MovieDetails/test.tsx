import { render, screen } from '@testing-library/react'

import MovieDetails from '.'

describe('<MovieDetails />', () => {
  it('should render the heading', () => {
    const { container } = render(<MovieDetails />)

    expect(screen.getByRole('heading', { name: /MovieDetails/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
