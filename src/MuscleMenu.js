import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import MuscleStructure from './MuscleStructure.js';
import './MuscleMenu.css';

class MuscleMenu extends MuscleStructure
{
    render() {
        return (
            <div id="buttonHolderHolder">
                <div id="buttonsHolder">
                    <p className="buttonSubgroup"> 
                        Front Muscles:
                    <ButtonGroup>
                        <Button className="muscleButton AbsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Abs")}>
                            Abs
                        </Button>
                        <Button className="muscleButton BicepsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Biceps")}>
                            Biceps
                        </Button>
                        <Button className="muscleButton ChestMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Chest")}>
                            Chest
                        </Button>
                        <Button className="muscleButton ForearmMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Forearm")}>
                            Forearm
                        </Button>
                        <Button className="muscleButton QuadsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Quads")}>
                            Quads
                        </Button>
                    </ButtonGroup>
                    </p>
                    <p className="buttonSubgroup">
                        Back Muscles:
                    <ButtonGroup>
                        <Button className="muscleButton BackMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Back")}>
                            Back
                        </Button>
                        <Button className="muscleButton GlutesMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Glutes")}>
                            Glutes
                        </Button>
                        <Button className="muscleButton HamstringsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Hamstrings")}>
                            Hamstrings
                        </Button>
                        <Button className="muscleButton TricepsMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Triceps")}>
                            Triceps
                        </Button>
                    </ButtonGroup>
                    </p>
                    <p className="buttonSubgroup">
                        Both:
                    <ButtonGroup>
                        <Button className="muscleButton CalfMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Calf")}>
                            Calf
                        </Button>
                        <Button className="muscleButton ShouldersMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Shoulders")}>
                            Shoulders
                        </Button>
                        <Button className="muscleButton HeartMuscle MuscleInactive" onClick={() => this.MuscleOnClick("Heart")}>
                            Heart
                        </Button>
                    </ButtonGroup>
                    </p>
                </div>
            </div>
        );
    }
};
export default MuscleMenu;
