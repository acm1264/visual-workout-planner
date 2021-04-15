import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import MuscleStructure from './MuscleStructure.js';
import { useChecklist } from 'react-checklist';

class MuscleDropdown extends MuscleStructure
{
    render() {
        const data = [
            { _id: 1, label: 'item 1' },
            { _id: 2, label: 'item 2' },
            { _id: 3, label: 'item 3' },
        ]

        const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
            key: '_id',
            keyType: 'number',
        });

        return (
            <><Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Muscles
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Abs")}>
                            Abs
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Back")}>
                            Back
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Biceps")}>
                            Biceps
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Calves")}>
                            Calves
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
                        <div onClick={() => this.MuscleOnClick("Quads")}>
                                      Quads
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Shoulders")}>
                                        Shoulders
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item as="button">
                        <div onClick={() => this.MuscleOnClick("Triceps")}>
                                    Triceps
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

                <ul>
                    <li>
                        <input
                            type="checkbox"
                            onChange={handleCheck}
                            checked={isCheckedAll} />
                        <label>Check All</label>
                    </li>

                    {data.map((v, i) => (
                        <li key={i}>
                            <input
                                type="checkbox"
                                data-key={v._id}
                                onChange={handleCheck}
                                checked={checkedItems.has(v._id)} />
                            <label>{v.label}</label>
                        </li>
                    ))}
                </ul></>
        );
    }
};
export default MuscleDropdown;