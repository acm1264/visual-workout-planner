import React, { useState } from "react";
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import DBAccess from './DBAccess';

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

test('DB Access placeholder test', () => {
    expect(true).toBeTruthy();
});

test('DB Access placeholder POST test', () => {
    expect(false).toBeFalsy();
});

test('DB Access placeholder GET test', () => {
    expect(true).not.toBeFalsy();
});
