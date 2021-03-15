import React from "react";
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import About from './About';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('the About information is displayed on the webpage', () => {
   render(<About />);
   const linkElement = screen.getByText(/^.*?\bVisual Workout Planner\b.*?$/m);
   expect(linkElement).toBeInTheDocument();
});
