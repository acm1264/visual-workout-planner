import React from 'react';
import MuscleDropdown from './MuscleDropdown';
import {fireEvent, render, screen, act} from '@testing-library/react';
import "@testing-library/jest-dom";



test('makes sure "Muscle" button displayed correctly on dropdown.', () => {
    render(<MuscleDropdown />);
    const element = document.getElementById("dropdown-basic").innerHTML;
    expect(element).toBe("Muscles");
});

test('makes sure length of dropdown elements equals 1 since Muscle button has not been clicked yet.', () => {
    render(<MuscleDropdown />);
    const element = document.getElementsByTagName("button").length;
    expect(element).toBe(1);
});



test("When Muscle button is clicked, there should be length of 11 new items showing that it worked.", async () => {
    await act( async () => {
        const  { getByText } = render(<MuscleDropdown/>);
        fireEvent.click(screen.getByText("Muscles"));
        render(<MuscleDropdown/>);
        const num_of_muscles = document.getElementsByClassName("dropdown-item").length;
        expect(num_of_muscles).toBe(11);
           });
      });
    
    
      test("All 11 muscle groups are displayed and spelled correctly once newly rendered", async () => {
        await act( async () => {
            const  { getByText } = render(<MuscleDropdown/>);
            fireEvent.click(screen.getByText("Muscles"));
            render(<MuscleDropdown/>);
            expect(getByText("Abs")).toBeInTheDocument(); 
            expect(getByText("Back")).toBeInTheDocument();
            expect(getByText("Biceps")).toBeInTheDocument();
            expect(getByText("Calves")).toBeInTheDocument();
            expect(getByText("Chest")).toBeInTheDocument();
            expect(getByText("Forearms")).toBeInTheDocument();
            expect(getByText("Glutes")).toBeInTheDocument();
            expect(getByText("Hamstrings")).toBeInTheDocument();
            expect(getByText("Quads")).toBeInTheDocument();
            expect(getByText("Shoulders")).toBeInTheDocument();
            expect(getByText("Triceps")).toBeInTheDocument(); 
               });
          });
        
          
          



              
              

              







