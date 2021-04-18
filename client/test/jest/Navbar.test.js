import {render, screen} from '@testing-library/react'
import Navbar from '../../components/Navbar';

test('check navbar rendered', () => {
  render(<Navbar />)

  expect(screen.getByRole('navigation', {name: ""})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: "Next Apollo"})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: "Home"})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: "About"})).toBeInTheDocument();
  expect(screen.getByRole('link', {name: "Users"})).toBeInTheDocument();
})