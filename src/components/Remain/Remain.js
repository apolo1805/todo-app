
import React from 'react';

function Remain({taskList}) {
    return (
        <div>
            {taskList.length === 0 ? "" : taskList.length + " tasks are still active"}
        </div>
    );
}

export default Remain;