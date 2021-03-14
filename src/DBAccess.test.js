import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { render, fireEvent, queryByPlaceholderText } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import DBAccess from './DBAccess';


it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<DBAccess />, div);
    ReactDOM.unmountComponentAtNode(div);
});


//Makes sure that the "Your Thought" textbox has nothing in it once starting
it("Textbox check", () => {
    render(<DBAccess />);
    var input = document.getElementsByName("text")[0].value;
    expect(input).toBe("");

});


it("Matches date format length ", ()=> {
    render(<DBAccess />);
    var date = document.getElementsByName("date")[0].value;
    expect(date.length).toBe(10);

});
    


    
    





