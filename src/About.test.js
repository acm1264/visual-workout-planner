import { render, screen } from '@testing-library/react';
import About from './About';


//////////////placeholder test
test('Placeholder Test', () => {
  render(<About />);
  const linkElement = screen.getByText(/^.*?\bVisual Workout Planner\b.*?$/m);
  expect(linkElement).toBeInTheDocument();
});
