import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import MuscleStructure from './MuscleStructure.js';

class MuscleDropdown extends MuscleStructure
{
    render() {
        return (
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Muscles
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>Front Muscles</Dropdown.Header>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Abs")}>
                            Abs
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Biceps")}>
                            Biceps
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Chest")}>
                            Chest
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Forearm")}>
                            Forearms
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Quads")}>
                            Quads
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Back Muscles</Dropdown.Header>
                    <Dropdown.Item as="button">
                        <div data-testid="back" onClick={() => this.MuscleOnClick("Back")}>
                            Back
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Glutes")}>
                            Glutes
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Hamstrings")}>
                             Hamstrings
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Triceps")}>
                                    Triceps
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Both</Dropdown.Header>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Calves")}>
                            Calves
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Shoulders")}>
                            Shoulders
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
};
export default MuscleDropdown;