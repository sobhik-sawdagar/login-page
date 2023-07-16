import React from 'react';


const Toggle = (props) => {
    return (
        <div className="button-box">
        <div id="btn"></div>
        <button type="button" className="toggle-btn" onClick={props.admin}>Admin</button>
        <button type="button" className="toggle-btn" onClick={props.user}>User</button>
        </div>
    );
};

export default Toggle;