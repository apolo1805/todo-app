
import React from 'react';
import { Button } from 'react-bootstrap';

function Filter(props) {
    return (
        <div>
            <Button variant="secondary">All</Button>{' '}
            <Button variant="primary">Active</Button>{' '}
            <Button variant="success">Completed</Button>{' '}
        </div>
    );
}

export default Filter;