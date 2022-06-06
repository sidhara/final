import React, { useState } from "react";
import data from "../data/data.json"

export const UpdateMaxOrders=()=>{
    const [products, setProducts]=useState(data);
    var combobox=document.getElementById('combobox');
    var selectedProductStock=products[0].In_Stock;
    combobox.addEventListener('click',(event)=>{
        var selectedId=combobox.value;
        products.map((product)=>{
            if(product.Id==selectedId){
                selectedProductStock=product.In_Stock;
                console.log(product.In_Stock)
                var input=document.getElementById('input')
                input.setAttribute("max", selectedProductStock);
            }
        })
    })
}