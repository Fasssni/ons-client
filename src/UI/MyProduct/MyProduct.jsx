import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalAdd } from "../ModalAdd";
import { ProductForm } from "../ProductForm/ProductForm";
import { MyButton } from "../UIs/MyButton/MyButton";
import cl from "./MyProduct.module.css"







const MyProduct=({device,searched,dev,search, list})=>{

    const k=Date.now();
    const [isClicked,setClicked]=useState(false);
   

    const [toBasket, setBasket]=useState("")
    const localAdd=(p)=>{
        setBasket(p)
       

    }

    

   

    

 


  

    return(
        <div className={cl.whole}> 



  
      
     {search.length>0?
             list.length==0?
                         <h3 className={cl.ifno}>У нас пока нет такой запчасти,но скоро будет!</h3>
                           :
                           list.map((p)=>
     
                                <ProductForm p={p} isClicked={isClicked} setClicked={setClicked} ></ProductForm>
                                                )
                     :
                       device.map((p)=>
       
                              <ProductForm p={p} isClicked={isClicked} setClicked={setClicked} ></ProductForm>
      
      )}

       
 

        
        </div>
    )
}



export default MyProduct;