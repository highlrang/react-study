
// props에서 상태 공유
function Calculator(props) {
    // const [temperature, setTemperature] = useState('');

    // const handleChange = (event) => {
    //     setTemperature(event.target.value);
    // }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            <input 
                value={props.temperature}
                onChange={props.handleChagne} />
        </fieldset>
    );
}