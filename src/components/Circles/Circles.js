import React from 'react';
import './Circles.css';

const Circles = (props) => (
    <div className='Circles'>
        <div className={props.selCircleIdx === 0 ? 'selected' : null}>1</div>

        <div className={props.selCircleIdx === 1 ? 'selected' : null}>2</div>

        <div className={props.selCircleIdx === 2 ? 'selected' : null}>3</div>

        <div className={props.selCircleIdx === 3 ? 'selected' : null}>4</div>
    </div>
)

export default Circles;