import React, {useEffect, useState, useCallback} from "react";
import UserStatus from "./UserStatus";
import useCounter from "./useCounter";

function Counter(props){
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`
    })
    
    // useCallback 활용하여 click + 1
    const handleClick = useCallback(() => setCount(count => count + 1), []);

    return (
        <div>
            <div>
                <p>총 {count}번 클릭했습니다.</p>
                <button onClick={handleClick}>
                    클릭
                </button>
            </div>
            <div>
                <UserStatus user="홍길동"/>
            </div>
        </div>
    )
}

export default Counter;