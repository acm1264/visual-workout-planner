import { render, screen } from '@testing-library/react';
import MuscleStructures from './MuscleStructures';

////////////placeholder test
test('Placeholder Test', () => {
    render(<MuscleStructures />);
    const linkElement = screen.getByText(/Muscle Structures/i);
    expect(linkElement).toBeInTheDocument();
  });