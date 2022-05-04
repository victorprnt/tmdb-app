import { render, screen } from '@testing-library/react'

import MovieGrid from '.'

describe('<MovieGrid />', () => {
  it('should render the heading', () => {
    const { container } = render(<MovieGrid />)

    expect(screen.getByRole('heading', { name: /MovieGrid/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
