import React, { useState } from 'react';
import styled from 'styled-components';
import doneIcon from '../../assets/done.svg'

export default () => {
    const [isChecked, toggleChecked] = useState<boolean>(false);

    return (
        <>
            <CustomCheckBox
                type='checkbox'
                id='customCheckBox'
                name='customCheckBox'
                value='yes'
                checked={isChecked}
                onChange={() => {
                    toggleChecked(!isChecked);
                }}
            />
            <label htmlFor='customCheckBox'>Click me</label>
        </>
    );
};

const CustomCheckBox = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    & + label::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid #adb5bd;
        box-sizing: border-box;
        border-radius: 2px;
        margin-right: 8px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        transition: border-color 0.2s ease-out;
    }
    &:checked + label::before {
        background-image: url('${doneIcon}');
        background-color: rgba(92, 107, 192, 1);
        border: 0px solid rgba(92, 107, 192, 1);
    }
    &:not(:disabled):not(:checked) + label:hover::before {
        border: 2px solid rgba(92, 107, 192, 1);
    }
`;
