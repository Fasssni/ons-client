import React, { memo, useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalAdd } from "../ModalAdd";
import { MyButton } from "../UIs/MyButton/MyButton";

import cl from "./ProductForm.module.css"


export const ProductForm=({...props})=>{

    const [change,setChange]=useState(false);
    const [counter, setCounter]=useState(0)
    
    const [isClicked,setIsClicked]=useState(false)

    const dispatch=useDispatch()

    const basket=useSelector(state=>state.basket)

    const addToBasket=(p,counter)=>{ 
  
    setChange(true)
    setCounter((prevCounter)=>prevCounter+1)
    dispatch({ 
        type:"ADD_ITEM",payload:p
    })
    

    return(
        console.log(basket)
    )
}

const add=(p, count)=> { 
    setChange(true)

    setCounter((prevCounter)=>prevCounter+1)


    dispatch({ 
        type:"ADD_ITEM",payload:{p:p,count:count}
    })

    console.log("ADD Worked")
    
}

const remove=(p, count)=> { 
    setChange(true)

    setCounter((prevCounter)=>prevCounter-1)


    dispatch({ 
        type:"ADD_ITEM",payload:{p:p,count:count}
    })

    console.log("REMOVE Worked")
    
}

    const check=()=>{ 
        if(counter<0){ 
            setCounter(0);
            console.log("usememo worked")
        }
   
       return(counter)}


    const count=useMemo(()=>check(),[counter])

    return( 

        
        <div className={cl.main} key={props.p.id} onClick={()=>setIsClicked(!isClicked)} >
        
        <img className={cl.img} src={props.p.img}></img>
        <div сlassName={cl.info}>
            <h2 className={cl.title}>{props.p.title}</h2>
            <p className={cl.text}>{props.p.description.slice(0,35)}</p>
             <h3 className={cl.price}>{props.p.price} рублей</h3>
         </div>
      
        <div onClick={(e)=>e.stopPropagation()}>
        {       
             change?

             <div className={cl.changed}>
                <button onClick={()=>setCounter((prevCounter)=>prevCounter-1)} className={cl.btn}>-</button>
                <span>{count}</span>
                <button onClick={()=>setCounter((prevCounter)=>prevCounter+1)} className={cl.btn}>+</button> 
                    
             </div>


              :
            <MyButton style={{
                  
                  marginLeft:"1rem",
                  marginRight:"4rem"
                 
                
            }}
                 onClick={event=>addToBasket(props.p)}>
                                                     В корзину
             </MyButton> }
             </div>


{/* Модальное окно ниже !!!!!!!!!!!!!!!!!!!!!!! */}


        <ModalAdd mod={isClicked} setMod={setIsClicked}>

        <div className={cl.main__modal} key={props.p.id} onClick={(e)=>e.stopPropagation()} >
        
        <img className={cl.img} src={props.p.img}></img>
        <div сlassName={cl.info}>
            <h2 className={cl.title}>{props.p.title}</h2>
            <p className={cl.text}>{props.p.description}</p>
             <h3 className={cl.price}>{props.p.price} рублей</h3>
         </div>
      
      
        {       
             change?

             <div className={cl.changed}>
                <button onClick={()=>setCounter((prevCounter)=>prevCounter-1)} className={cl.btn}>-</button>
                <span>{count}</span>
                <button onClick={()=>setCounter((prevCounter)=>prevCounter+1)} className={cl.btn}>+</button> 
                    
             </div>


              :
            <MyButton style={{
                  
                  marginLeft:"1rem",
                  marginRight:"4rem"
                 
                
            }}
                 onClick={e=>addToBasket(props.p)}>
                                                     В корзину
             </MyButton> }
             </div>
        
        </ModalAdd>

    


   </div>
    )
}
