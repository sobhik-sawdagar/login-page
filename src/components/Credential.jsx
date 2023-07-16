import React from 'react';


const Credentials = (props) => {
    return (
        <div className="text-box">
        <div id="txt"></div>
        <input type="text" className="input" placeholder={props.text}/>
        </div>
    );
};

export default Credentials;