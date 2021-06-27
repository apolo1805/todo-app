
import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import './Task.css';

function Task({content, handleChange, index}) {
    const [isCompleted, setCompleted] = useState(false);

    function changeEvent() {
        handleChange(!isCompleted, index);
        setCompleted(!isCompleted);
    }

    return (
        <div className="c-task">
            <InputGroup className="mb-3">
                <InputGroup.Checkbox checked={isCompleted} onChange={() => changeEvent()}/>
                <span className={isCompleted ? "strikeout" : "regular"}>{content}</span>
            </InputGroup>
        </div>
    );
}

export default Task;