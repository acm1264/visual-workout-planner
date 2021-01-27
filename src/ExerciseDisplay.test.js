import { render, screen } from '@testing-library/react';
import ExerciseDisplay from './ExerciseDisplay';

////////////placeholder test
test('Placeholder Test', () => {
    render(<ExerciseDisplay />);
    const linkElement = screen.getByText(/Exercise Display/i);
    expect(linkElement).toBeInTheDocument();
  });