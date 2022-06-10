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
        var submit2=document.getElementById('submit_resupply')

        var combobox=document.getElementById('combobox_resupply');
        var selectedId=combobox.value;

        submit2.addEventListener('click',(event)=>{//controlling the submit
            products=JSON.parse(localStorage.getItem('products'))
            event.stopImmediatePropagation()
            if(input.value>0){
                selectedId=combobox.value
                products[selectedId].In_Stock=parseInt(products[selectedId].In_Stock)+parseInt(input.value)
                products[selectedId].Total_Price=products[selectedId].In_Stock*products[selectedId].Price_Each
                localStorage.setItem('products', JSON.stringify(products));
                swal("Resupply of "+products[selectedId].Product+" submited succesfully!")
                input.value=0
            }
        })

        var submit=document.getElementById('form')
        submit.addEventListener('submit',(event)=>{//updating when there's an order
            event.preventDefault()
            products=JSON.parse(localStorage.getItem('products'))
            refresh()
        })

        var submit3=document.getElementById('submit_supply')
        submit3.addEventListener('blur',(event)=>{//updating when there's an supply
            event.preventDefault()
            products=JSON.parse(localStorage.getItem('products'))
            refresh()
        })
    }, [])

    return <div>
    <h1 className="resupply_title">Resupply</h1>
    <div className="resupply_container">
        <select id="combobox_resupply" name="Products">
            {products.map((product)=>(
                <option value={product.Id}>{product.Product}</option>
            ))}
        </select>
        <input id="input_resupply" min="1" type="number" placeholder="Quantity" required/>
        <form id="form_resupply">
            <input id="submit_resupply" type="submit" value="Submit"/>
        </form>
    </div>
</div>
}