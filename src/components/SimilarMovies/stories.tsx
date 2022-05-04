import { Story, Meta } from '@storybook/react'
import SimilarMovies from '.'

export default {
  title: 'SimilarMovies',
  component: SimilarMovies
} as Meta

export const Default: Story = () => <SimilarMovies />
