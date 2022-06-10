import React from "react";
import swal from "sweetalert";
import { useState } from "react";

export const Orders=()=>{

    var products=JSON.parse(localStorage.getItem('products'))

    const [value, setValue] = useState();
    const refresh = ()=>{
        // refresh the component
        setValue({});
    }    

    React.useEffect(()=>{//this is after rendering the component
        var input=document.getElementById('input')
        var submit=document.getElementById('submit')
        var selectedProductStock=products[0].In_Stock

        input.setAttribute("max", selectedProductStock);
        var combobox=document.getElementById('combobox');
        var selectedId=combobox.value;
        combobox.addEventListener('click',(event)=>{//controlling the max amout in the quantity input
            selectedId=combobox.value;
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
            products=JSON.parse(localStorage.getItem('products'))
            event.stopImmediatePropagation()
            if(input.value>selectedProductStock){
                input.value=0
                swal("Error, not enough products in stock")
            }else if(input.value==selectedProductStock){
                swal("Order of "+products[selectedId].Product+" submited succesfully!")
                products.splice(selectedId,1)
                var x=0;
                products.forEach(product => {
                    product.Id=x;
                    x=x+1
                });
                localStorage.setItem('products', JSON.stringify(products));
                input.value=0
                refresh()
            }else if(input.value>0){
                products[selectedId].In_Stock=products[selectedId].In_Stock-input.value
                products[selectedId].Total_Price=products[selectedId].In_Stock*products[selectedId].Price_Each
                localStorage.setItem('products', JSON.stringify(products));
                swal("Order of "+products[selectedId].Product+" submited succesfully!")
                input.value=0
            }
        })

        var submit2=document.getElementById('form_resupply')
        submit2.addEventListener('submit',(event)=>{//updating when there's an resupply
            event.preventDefault()
            products=JSON.parse(localStorage.getItem('products'))
            refresh()
        })

        var submit3=document.getElementById('submit_supply')
        submit3.addEventListener('blur',(event)=>{//updating when there's a supply
            event.preventDefault()
            products=JSON.parse(localStorage.getItem('products'))
            refresh()
        })
    }, [])

    return <div>
        <h1 className="orders_title">Orders</h1>
        <div className="orders_container">
            <select id="combobox" name="Products">
                {products.map((product)=>(
                    <option value={product.Id}>{product.Product}</option>
                ))}
            </select>
            <input id="input" min="1" type="number" placeholder="Quantity" required/>
            <form id="form">
                <input id="submit" type="submit" value="Submit"/>
            </form>
            
        </div>
    </div>
}