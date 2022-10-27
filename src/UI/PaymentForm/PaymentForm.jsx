import React, { useMemo } from "react";
import { useState } from "react";
import { CROSS } from "../Uconsts";
import cl from "./PaymentForm.module.css"
import {useDispatch, useSelector} from "react-redux"

export const PaymentForm=({...props})=>{ 
    const dispatch=useDispatch()
    const basket=useSelector(state=>state.basket)


    const [counter,setCounter]=useState(1)

    const check=()=>{ 
        if(counter<0){ 
            setCounter(0);
            console.log("usememo worked")
        }
        return(counter)}

    const remove=(p)=>{
        dispatch( 
           { 
            type:"REMOVE_ITEM", 
            payload:p
           }
        )
        console.log(basket)

    }

    const count=useMemo(()=>check(),[counter])

    return( 
        <div className={cl.main}>
            <img className={cl.img} src={props.p.img}/>
            <div>
                <h3 className={cl.title}>{props.p.title}</h3>
                <p className={cl.description}>{props.p.description.slice(0,35)}</p>
            </div> 
            <h3>{props.p.price}Р </h3>
            <div className={cl.changed}>
                <button onClick={()=>setCounter((prevCounter)=>prevCounter-1)} className={cl.btn}>-</button>
                <span style={{color:"black"}}>{count}</span>
                <button onClick={()=>setCounter((prevCounter)=>prevCounter+1)} className={cl.btn}>+</button> 
                    
             </div>
             <svg onClick={()=>remove(props.p)} className={cl.svg} width="24" height="24" fill="red"  viewBox="0 0 24 24">
                          <path  d={CROSS}/>
                     </svg>
            

        </div>
    )
}