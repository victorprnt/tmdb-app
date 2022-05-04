import { Story, Meta } from '@storybook/react'
import UpcomingMovies from '.'

export default {
  title: 'UpcomingMovies',
  component: UpcomingMovies
} as Meta

export const Default: Story = () => <UpcomingMovies />
