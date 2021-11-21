import React, {useState} from 'react'
import './SpgInput.css';

export default function SpgInput({name, type,  value, handler = () => {}, size = 'medium', label, ...props}) {
    if (!name || !type) {
        throw new Error('Name and Type Required');
    }

    const classMap = {
        small: 'dc-size_1-of-4',
        medium: 'dc-size_2-of-4',
        large: 'dc-size_3-of-4',
        xlarge: 'dc-size_4-of-4'
    }
    

    return (
        <div data-id='input-main'>
            <div className={`dc-vertical ${classMap[size]}`}>
                <label htmlFor='input'>
                    {label}
                </label>
                <input name='input' value={value} data-id='name' type={type} onKeyDown={handler}></input>        
            </div>
        </div>
    )
}

