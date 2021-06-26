
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Input.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Input({placeholder, tooltip}) {
    return (
        <div className="c-input">
             <InputGroup className="mb-3">
                <FormControl
                    placeholder={placeholder}
                />
                <InputGroup.Text>{tooltip}</InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export default Input;