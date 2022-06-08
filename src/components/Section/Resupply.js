import React from "react";
import swal from "sweetalert";
import { useState } from "react";

export const Resupply=()=>{

    var products=JSON.parse(localStorage.getItem('products'))

    const [value, setValue] = useState();
    const refresh = ()=>{
        // refresh the component
        setValue({});
    }    

    React.useEffect(()=>{//this is after rendering the component
        var input=document.getElementById('input_resupply')
        var submit=document.getElementById('submit_resupply')

        var combobox=document.getElementById('combobox_resupply');
        var selectedId=combobox.value;

        submit.addEventListener('click',(event)=>{//controlling the submit
            event.stopImmediatePropagation()
            if(input.value>0){
                products[selectedId].In_Stock=parseInt(products[selectedId].In_Stock)+parseInt(input.value)
                products[selectedId].Total_Price=products[selectedId].In_Stock*products[selectedId].Price_Each
                localStorage.setItem('products', JSON.stringify(products));
                swal("Resupply of "+products[selectedId].Product+" submited succesfully!")
                input.value=0
            }
        })

    
        var change=document.getElementById('submit')
        change.addEventListener('click',(event)=>{
            console.log('????')
            change.click()//ignore this please, this is my "tf2 coconut". God I hate this language
            refresh()
        })
    
    }, [])

    return <div>
    <h1 className="orders_title">Resupply</h1>
    <div className="orders_container">
        <select id="combobox_resupply" name="Products">
            {products.map((product)=>(
                <option value={product.Id}>{product.Product}</option>
            ))}
        </select>
        <input id="input_resupply" min="1" type="number" placeholder="quantity" required/>
        <input id="submit_resupply" type="submit" value="Submit"/>
    </div>
</div>
}