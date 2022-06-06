import React, { useState } from "react";
import data from "../data/data.json"

export const Table=()=>{

    const [products, setProducts]=useState(data);

    return <div class="scroll">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product</th>
                    <th>Price Each</th>
                    <th>In Stock</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr>
                        <td>{product.Id}</td>
                        <td>{product.Product}</td>
                        <td>{product.Price_Each}</td>
                        <td>{product.In_Stock}</td>
                        <td>{product.Total_Price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
}