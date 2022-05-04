import { Story, Meta } from '@storybook/react'
import MovieDetails from '.'

export default {
  title: 'MovieDetails',
  component: MovieDetails
} as Meta

export const Default: Story = () => <MovieDetails />
