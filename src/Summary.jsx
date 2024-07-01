import React from 'react';
import "./summary.css";

function Summary() {
    return (
        <ul className='summary-list'>
            <li>Create a Redux store with <span className='highlight'>configureStore</span>
                <ul>
                    <li><span className='highlight'>configureStore</span> accepts a <span className='highlight'>reducer</span> function as a named argument</li>
                    <li><span className='highlight'>configureStore</span> automatically sets up the store with good default settings</li>
                </ul>
            </li>
        </ul>
    )
}

export default Summary
