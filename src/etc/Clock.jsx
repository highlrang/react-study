import React, { useState, useEffect } from "react";
import Dday from "./Dday";

function Clock(props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    })
        
    return (
        <div>
            <h6>현재 시간 : {currentTime.toLocaleTimeString()}</h6>
            <p>
                <Dday month={1} day={27}/>
            </p>
        </div>
        
    )
}

export default Clock;