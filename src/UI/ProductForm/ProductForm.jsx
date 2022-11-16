import React, { memo, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalAdd } from "../ModalAdd";
import { MyButton } from "../UIs/MyButton/MyButton";
import axios from "axios";


import cl from "./ProductForm.module.css"

const ProductFor=({...props})=>{

   


    const [change,setChange]=useState(false);
    const [counter, setCounter]=useState(0)
    
    const [isClicked,setIsClicked]=useState(false)

    const dispatch=useDispatch()

    const basket=useSelector(state=>state.basket)

    props.p["card"]=false
   


   async function addToBasket(p,counter){ 
        
     
        props.p["card"]=true

        p['count']=0;
        dispatch({ 
            type:"ADD_ITEM",payload:props.p
        })
       
        setChange(true)
        setCounter((prevCounter)=>prevCounter+1)

       
        
        
       
     

  
    

    return(
        console.log(counter)
    )
}







    const check=()=>{ 
        if(counter<0){ 
            setCounter(0);
            console.log("usememo worked")
        }
   
       return(counter)}


    const initialRender=useRef(true)

    useEffect(()=>{
        if(initialRender.current){
        initialRender.current=false
        } else{
            dispatch({ 
            type:"COUNT",payload:{id:props.p.id,counter:counter}
        })
            
            console.log("the result is",counter)
        }
        

    },[counter])

    useEffect(()=>
    {
      check()
    }, [counter])

    

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
                <span>{counter}</span>
                <button onClick={()=>setCounter((prevCounter)=>prevCounter+1)} className={cl.btn}>+</button> 
                    
             </div>


              :
            <MyButton style={{
                  
                  marginLeft:"1rem",
                  marginRight:"4rem"
                 
                
            }}
                 onClick={event=>addToBasket(props.p, counter)}>
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
                <span>{counter}</span>
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

export const ProductForm=memo(ProductFor)