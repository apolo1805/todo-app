
import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Input.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Input({placeholder, tooltip, handleAdd}) {

    const [input, setInput] = useState("");

    function handleKeyPress(e) {
        if (e.code === "Enter") {
            handleAdd(input);
            setInput("");
         }
    }

    return (
        <div className="c-input">
             <InputGroup className="mb-3">
                <FormControl
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e)}
                />
                <InputGroup.Text>{tooltip}</InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default Input;