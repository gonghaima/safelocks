import React from 'react';
const KeyButton = ({name, onClick}) => {
    return (
        <div className="col-sm-4"><button
            className="btn btn-primary btn-block"
            onClick={onClick}
            >
         {name}
        </button></div>);
}

export default KeyButton;