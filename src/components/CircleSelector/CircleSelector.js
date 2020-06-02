import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
    <div className='CircleSelector'>
        <button 
            className={props.selCircleIdx === 0 ? 'selected' : ''}
            onClick={() => props.handleButtonClick(0)}
        >SELECT CIRCLE 1
        </button>

        <button
            className={props.selCircleIdx === 1 ? 'selected' : ''}
            onClick={() => props.handleButtonClick(1)}
        >SELECT CIRCLE 2</button>

        <button 
            className={props.selCircleIdx === 2 ? 'selected' : ''}
            onClick={() => props.handleButtonClick(2)}
        >SELECT CIRCLE 3</button>

        <button 
            className={props.selCircleIdx === 3 ? 'selected' : ''}
            onClick={() => props.handleButtonClick(3)}
        >SELECT CIRCLE 4</button>
    </div>
)

export default CircleSelector;