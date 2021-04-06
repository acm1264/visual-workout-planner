import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const MuscleDropdown = () =>
{
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Muscles
                </Dropdown.Toggle>
<<<<<<< HEAD
=======

>>>>>>> b7056d340467914c80b574530c1f73b997c557a6
                <Dropdown.Menu>
                    <Dropdown.Item as="button">Abs</Dropdown.Item>
                    <Dropdown.Item as="button">Back</Dropdown.Item>
                    <Dropdown.Item as="button">Biceps</Dropdown.Item>
                    <Dropdown.Item as="button">Calves</Dropdown.Item>
                    <Dropdown.Item as="button">Chest</Dropdown.Item>
                    <Dropdown.Item as="button">Forearms</Dropdown.Item>
                    <Dropdown.Item as="button">Glutes</Dropdown.Item>
                    <Dropdown.Item as="button">Hamstrings</Dropdown.Item>
                    <Dropdown.Item as="button">Quads</Dropdown.Item>
                    <Dropdown.Item as="button">Shoulders</Dropdown.Item>
                    <Dropdown.Item as="button">Triceps</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
};
export default MuscleDropdown;