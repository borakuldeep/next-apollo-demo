import {render, screen} from '@testing-library/react'
import Footer from '../../components/Footer';

test('check footer rendered', () => {
  render(<Footer />)
  const footerText = 'Copyright 2021 Next-Apollo';

  expect(screen.getByText(footerText)).toBeInTheDocument();
})