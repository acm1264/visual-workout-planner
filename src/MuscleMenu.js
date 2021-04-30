import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import MuscleStructure from './MuscleStructure.js';
import './MuscleMenu.css';

class MuscleMenu extends MuscleStructure
{
    render() {
        return (
            <div>
                <p> 
                    Front Muscles:
                <ButtonGroup>
                    <Button className="AbsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Abs")}>
                        Abs
                    </Button>
                    <Button className="BicepsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Biceps")}>
                        Biceps
                    </Button>
                    <Button className="ChestMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Chest")}>
                        Chest
                    </Button>
                    <Button className="ForearmMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Forearm")}>
                        Forearm
                    </Button>
                    <Button className="QuadsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Quads")}>
                        Quads
                    </Button>
                </ButtonGroup>
                </p>
                <p>
                    Back Muscles:
                <ButtonGroup>
                    <Button className="BackMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Back")}>
                        Back
                    </Button>
                    <Button className="GlutesMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Glutes")}>
                        Glutes
                    </Button>
                    <Button className="HamstringsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Hamstrings")}>
                        Hamstrings
                    </Button>
                    <Button className="TricepsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Triceps")}>
                        Triceps
                    </Button>
                </ButtonGroup>
                </p>
                <p>
                    Both:
                <ButtonGroup>
                    <Button className="CalfMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Calf")}>
                        Calf
                    </Button>
                    <Button className="ShouldersMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Shoulders")}>
                        Shoulders
                    </Button>
                    <Button className="HeartMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Heart")}>
                        Heart
                    </Button>
                </ButtonGroup>
                </p>
            </div>
        );
    }
};
export default MuscleMenu;
