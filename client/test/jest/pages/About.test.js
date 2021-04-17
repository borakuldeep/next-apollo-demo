import {render, screen} from '@testing-library/react'
import AboutPage from '../../../pages/about';

test('About Page rendered', () => {
  render(<AboutPage />)

  expect(screen.getByRole('button', {name: "Go Back"})).toBeInTheDocument();
  expect(screen.getByText('Sample app created using NextJS and Apollo.')).toBeInTheDocument();
  expect(screen.getByText('About Page')).toBeInTheDocument();
})