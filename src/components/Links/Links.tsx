import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <Link to='/menu'>Menu</Link>
            <Link to='/panel'>Panel</Link>
            <Link to='/checkbox'>CheckBox</Link>
            <Link to='/datepicker'>DatePicker</Link>
        </>
    );
}
