import Greeting from "./Greeting";

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            로그인
        </button>
    )
}

// 함수도 props로 넘겨받음
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            로그아웃
        </button>
    )
}

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    // 컴포넌트를 엘리먼트처럼 사용
    let button;
    if (isLoggedIn) {
        button = <LoginButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} >
                {button}
            </Greeting>
        </div>
    )
}

export default LoginControl;