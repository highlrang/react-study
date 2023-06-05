import React, { useState, useEffect } from "react";

function UserStatus(props){
    const [isOnline, setIsOnline] = useState(null);

    // componentWillUnmount
    useEffect(() => {
        // 컴포넌트가 마운트된 이후 실행됨
        setIsOnline(true)

        // 컴포넌트가 마운트 해제되기 전에 실행됨
        return () => {
            setIsOnline(false)
        };
    }, []);

    if (isOnline == null) {
        return props.user + ' 대기 중...';
    }
    return isOnline ? props.user + ' 온라인' : props.user + ' 오프라인';
}

export default UserStatus;