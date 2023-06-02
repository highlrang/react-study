import React from "react";

function Clock(props) {

    return (
        <div>
            <h6>현재 시간 : {new Date().toLocaleTimeString()}</h6>
        </div>
    )
}

export default Clock;