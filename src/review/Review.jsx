import React from "react";

function Review(props) {
    return (
        <div>
            <p>별점 : {props.point}</p>
            <p>내용 : {props.content}</p>
        </div>
    )
}

export default Review;