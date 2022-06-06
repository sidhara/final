import React, { useState } from "react";
import data from "../data/data.json"

export const Orders=()=>{

    const [products, setProducts]=useState(data);

    return <div>
        <h1 className="orders_title">Orders</h1>
        <div className="orders_container">
            <select id="combobox" name="Products">
                {products.map((product)=>(
                    <option value={product.Id}>{product.Product}</option>
                ))}
            </select>
            <input id="input" min="1" type="number" placeholder="quantity" required/>
            <input type="submit" value="Submit"/>
        </div>
    </div>
}