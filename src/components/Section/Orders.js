import React from "react";
import swal from "sweetalert";

export const Orders=()=>{

    var products=JSON.parse(localStorage.getItem('products'))

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
            event.stopImmediatePropagation()
            if(input.value>selectedProductStock){
                input.value=0
                swal("Error, not enough products in stock")
            }else{
                products[selectedId].In_Stock=products[selectedId].In_Stock-input.value
                products[selectedId].Total_Price=products[selectedId].In_Stock*products[selectedId].Price_Each
                localStorage.setItem('products', JSON.stringify(products));
                input.value=0
            }
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
            <input id="input" min="1" type="number" placeholder="quantity" required/>
            <input id="submit" type="submit" value="Submit"/>
        </div>
    </div>
}

  /**
    var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
   */