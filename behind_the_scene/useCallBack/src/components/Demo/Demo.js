import React from "react";

const Demo = (props) => {

    console.log('brrrrrrrrr');
    return(
        <p>
            {props.show ? 'This is new' : ''}
        </p>
    );
};

export default React.memo(Demo);