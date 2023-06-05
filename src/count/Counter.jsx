import React, {useEffect, useState} from "react";
import UserStatus from "./UserStatus";

function Counter(props){
    const [count, setCount] = useState(0);

    // componentDidMount, componentDidUpdate
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`
    })
    
    return (
        <div>
            <div>
                <p>총 {count}번 클릭했습니다.</p>
                <button onClick={() => setCount(count + 1)}>
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