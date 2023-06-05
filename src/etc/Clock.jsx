import React from "react";
import Dday from "./Dday";

function Clock(props) {

    return (
        <div>
            <h6>현재 시간 : {new Date().toLocaleTimeString()}</h6>
            <p>
                <Dday month={1} day={27}/>
            </p>
        </div>
        
    )
}

export default Clock;