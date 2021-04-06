import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import MuscleDropdown from './MuscleDropdown';
import {render, screen} from '@testing-library/react';


test('makes sure "Muscle" button displayed correctly on dropdown', () => {
    render(<MuscleDropdown />);
    const element = document.getElementById("dropdown-basic").innerHTML;
    expect(element).toBe("Muscles");
});



  

