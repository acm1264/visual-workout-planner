import React from 'react';

import { useChecklist } from 'react-checklist';

const data = [
    { _id: 1, label: 'Stretches' },
    { _id: 2, label: 'Non-stretches' },
]

export default () => {
    const { handleCheck, checkedItems } = useChecklist(data, {
        key: '_id',
        keyType: 'number',
    });

    return (
        <ul>

            {data.map((v, i) => (
                <li key={i}>
                    <input
                        type="checkbox"
                        data-key={v._id}                 
                        onChange={handleCheck}            
                        checked={checkedItems.has(v._id)} 
                    />
                    <label>{v.label}</label>
                </li>
            ))}

        </ul>
    );
};