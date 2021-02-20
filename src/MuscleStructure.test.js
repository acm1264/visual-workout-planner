import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MuscleStructure from "./MuscleStructure";
import muscleActiveState from "./MuscleStructure";
import { add } from './MuscleStructure';

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

test("changes color when clicked", () => {
    const MuscleOnClick = jest.fn();
    act(() => {
        render(<MuscleStructure MuscleOnClick={MuscleOnClick} />, container);
    });

    const muscle = document.querySelector("muscleName");
    expect(muscleActiveState[muscleName]).toBe("MuscleInactive");

    act(() => {
        muscle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(MuscleOnClick).toHaveBeenCalledTimes(1);
    expect(muscleActiveState[muscleName]).toBe("MuscleActive");
});

test('Placeholder Add Test', () => {
    const value = add(1, 2);
    expect(value).toBe(3);
});