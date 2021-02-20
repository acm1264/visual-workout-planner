import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FrontMuscleStructure from "./FrontMuscleStructure";


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

test('renders without crashing', () => {
    const svg = document.createElement('svg');
    render(<FrontMuscleStructure />, svg);
    expect(FrontMuscleStructure).toBeDefined();
});