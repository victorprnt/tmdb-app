import { render, screen } from '@testing-library/react'

import Credits from '.'

describe('<Credits />', () => {
  it('should render the heading', () => {
    const { container } = render(<Credits />)

    expect(screen.getByRole('heading', { name: /Credits/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
