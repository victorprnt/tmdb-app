import { Story, Meta } from '@storybook/react'
import MovieGrid from '.'

export default {
  title: 'MovieGrid',
  component: MovieGrid
} as Meta

export const Default: Story = () => <MovieGrid />
