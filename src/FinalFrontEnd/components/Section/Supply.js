import React from "react";
import swal from "sweetalert";

export const Supply=()=>{

    var products=JSON.parse(localStorage.getItem('products'))

    React.useEffect(()=>{//this is after rendering the component
        var form=document.getElementById('submit_supply')
        form.addEventListener('click',(event)=>{//controlling the submit
            event.preventDefault()
            event.stopImmediatePropagation()
            var name=document.getElementById('input_supply_product').value
            if(name!=''){
                var exist=false
                products.forEach(product => {
                    if(product.Product==name){
                        swal("Error, that product already exist!")
                        document.getElementById('input_supply_product').value=''
                        exist=true
                    }
                });
                if(!exist){
                    var price=document.getElementById('input_supply_price').value
                    if(price<=0 || price.includes('e')){
                        swal("Error, provide a valid price for the product!")
                        document.getElementById('input_supply_price').value=''
                    }else{
                        var quantity=document.getElementById('input_supply_quantity').value
                        if(quantity%1!=0){
                            swal("Error, provide a valid quantity of the product!")
                            document.getElementById('input_supply_quantity').value=''
                        }else{
                            swal("Supply of "+quantity+" "+name+" submited succesfully!")
                            products.push({"Id":products.length,"Product":name,"Price_Each":price,"In_Stock":quantity,"Total_Price":price*quantity})
                            localStorage.setItem('products', JSON.stringify(products));
                            document.getElementById('input_supply_product').value=''
                            document.getElementById('input_supply_price').value=''
                            document.getElementById('input_supply_quantity').value=''
                        }
                    }
                }
            }
        })
    }, [])

    return <div className="supply_container_sup">
        <h1 className="supply_title">Supply</h1>
        <div className="supply_container 1">
            <input className="input_supply_product" id="input_supply_product" type="text" placeholder="Product" required/>
            <input id="input_supply_quantity" min="1" type="number" placeholder="Quantity" required/>
        </div>
        <div className="supply_container 2">
            <input id="input_supply_price" min="1" type="number" placeholder="Price" required/>
            <form id="form_supply">
                <input className="submit_supply" id="submit_supply" type="submit" value="Submit"/>
            </form>
        </div>
        
    </div>
} 