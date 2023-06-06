import React from "react";
import Review from "./Review";
import TextInputWithFocusButton from "./TextInputWithFocusButton";

const reviews = [
    {
        point: 4.0,
        content: "만족스러워요~!"
    },
    {
        point: 3.0,
        content: "무난해요"
    }
]

function ReviewList(props) {
    return (
        <div>
            <p>리뷰작성</p>
            <p><TextInputWithFocusButton /></p>
            
            <p>리뷰목록</p>
            {
                reviews.map((review) => { 
                    return <Review point={review.point} content={review.content}/>
                })
            }
        </div>
    )
}

export default ReviewList;