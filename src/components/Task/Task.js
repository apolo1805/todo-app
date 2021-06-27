
import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Task.css';

function Task({content}) {
    const [isCompleted, setCompleted] = useState(false);

    return (
        <div className="c-task">
            <InputGroup className="mb-3">
                <InputGroup.Checkbox checked={isCompleted} onChange={() => setCompleted(!isCompleted)}/>
                <span className={isCompleted ? "strikeout" : "regular"}>{content}</span>
            </InputGroup>
        </div>
    );
}

export default Task;