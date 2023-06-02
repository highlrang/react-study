import React from "react";

function Product(props) {
    return (
        <div>
            <h3>{`상품명 : ${props.name}`}</h3>
            <h3>{`가격 : ${props.price}`}</h3>
        </div>
    )
}

export default Product;