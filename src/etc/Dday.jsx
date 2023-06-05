import { useState, useMemo, useEffect } from "react";

function Dday(props){
    const [today, setToday] = useState(new Date());
    const [dday, setDday] = useState(0);

    useEffect(() => {
        if(today.getDate() !== new Date().getDate()){
            setToday(new Date());
        }
    }, [today]);

    useMemo(
        () => {
            const birthday = new Date(today.getFullYear(), props.month, props.day);
            let diff = Math.ceil((today - birthday) / (1000 * 60 * 60 * 24));
            today > birthday ? diff = "+" + diff : diff = "-" + diff;
            setDday(diff);
        },
        [today, props]
    );

    return dday;
}

export default Dday;