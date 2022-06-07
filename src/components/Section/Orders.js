import React, { useState } from "react";
import data from "../data/data.json"


export const Orders=()=>{

    const [products, setProducts]=useState(data);

    React.useEffect(()=>{//this is after rendering the component
        var input=document.getElementById('input')
        var submit=document.getElementById('submit')
        var selectedProductStock=products[0].In_Stock

        input.setAttribute("max", selectedProductStock);
        var combobox=document.getElementById('combobox');
        combobox.addEventListener('click',(event)=>{//controlling the max amout in the quantity input
            var selectedId=combobox.value;
            products.map((product)=>{
                if(product.Id==selectedId){
                    selectedProductStock=product.In_Stock;
                    input.setAttribute("max", selectedProductStock);
                }
            })
        })

        input.addEventListener('keyup',(event)=>{//controlling the max amout in the quantity input
            if(input.value>selectedProductStock){
                input.value=input.value.slice(0,input.value.length-1)
            }
        })

        submit.addEventListener('click',(event)=>{//controlling the submit
            if(input.value>selectedProductStock){
                input.value=0
                alert()
            }
        })

    }, [])

    const alert=()=>{
        alert("Error, not enough products in stock")
    }

    return <div>
        <h1 className="orders_title">Orders</h1>
        <div className="orders_container">
            <select id="combobox" name="Products">
                {products.map((product)=>(
                    <option value={product.Id}>{product.Product}</option>
                ))}
            </select>
            <input id="input" min="1" type="number" placeholder="quantity" required/>
            <input id="submit" type="submit" value="Submit"/>
        </div>
    </div>
}