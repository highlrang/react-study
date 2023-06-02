import React from "react";
import Product from "./Product";

function ProductList(props) {
    return (
        <div>
            <Product name="상품1" price={10000} />
            <Product name="상품2" price={15000} />
        </div>
    );
}

export default ProductList;