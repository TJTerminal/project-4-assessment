import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (
    <div className='CircleSelector'>
        <button 
            className={props.selCircleIdx === 0 ? 'selected' : null}
            onClick={() => props.handleButtonClick(0)}>
                {props.selCircleIdx === 0 ? 'Circle 1 Selected' : 'Select Circle 1'}
        </button>

        <button
            className={props.selCircleIdx === 1 ? 'selected' : null}
            onClick={() => props.handleButtonClick(1)}>
                {props.selCircleIdx === 1 ? 'Circle 2 Selected' : 'Select Circle 2'}
        </button>

        <button 
            className={props.selCircleIdx === 2 ? 'selected' : null}
            onClick={() => props.handleButtonClick(2)}>
                {props.selCircleIdx === 2 ? 'Circle 3 Selected' : 'Select Circle 3'}
        </button>

        <button 
            className={props.selCircleIdx === 3 ? 'selected' : null}
            onClick={() => props.handleButtonClick(3)}>
                {props.selCircleIdx === 3 ? 'Circle 4 Selected' : 'Select Circle 4'}
        </button>
    </div>
)

export default CircleSelector;