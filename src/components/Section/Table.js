import { useState } from "react";
import React from "react";

export const Table=()=>{

    var products=JSON.parse(localStorage.getItem('products'))

    const [value, setValue] = useState();
    const refresh = ()=>{
        // refresh the component
        setValue({});
    }    

    React.useEffect(()=>{//reload in submit case
        var submit=document.getElementById('submit')
        submit.addEventListener('click',(event)=>{
            submit.click()//ignore this please, this is my "tf2 coconut". God I hate this language
            refresh()
        })

        var submit2=document.getElementById('submit_resupply')
        submit2.addEventListener('click',(event)=>{
            submit2.click()//ignore this please, this is my "tf2 coconut". God I hate this language
            refresh()
        })

        var submit3=document.getElementById('submit_supply')
        submit3.addEventListener('click',(event)=>{
            submit3.click()//ignore this please, this is my "tf2 coconut". God I hate this language
            refresh()
        })
    },[])

    return <div class="scroll">
        <table id="table">
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