import React from "react";
import Product from "./Product";
import Clock from "../etc/Clock";
import ReviewList from "../review/ReviewList";

const products = [
    {
        name: "상품1",
        price: 10000
    },
    {
        name: "상품2", 
        price: 15000
    }
]

function ProductList(props) {
    return (
        <div>
            {
                products.map((product) => {
                    return <Product name={product.name} price={product.price} />
                })
            }
            <Clock />
            <ReviewList />
        </div>
    );
}

export default ProductList;