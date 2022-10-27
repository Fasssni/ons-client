import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyButton } from "../UIs/MyButton/MyButton";
import cl from "./UserForm.module.css"

export const UserForm=()=>{


    const location=window.location
    console.log(location)

    const [info,setInfo]=useState({name:"",mail:"", address:""})

    const dispatch=useDispatch()

    const user=useSelector(state=>state.basket.userInfo)

   
   
    const getUser=()=>{ 
        dispatch(
            { 
                type:"GET_USER",payload:info
            }
        )
        setInfo({name:"",mail:"",address:""})
    }

    return( 
        <div onClick={(e)=>e.stopPropagation()} className={cl.main}>
            
            
            <h3 className={cl.text}>Оставьте свои данные</h3>
            <p className={cl.text1}>мы с Вами свяжемся</p>
            <input 
                value={info.mail}
                onChange={(e)=>setInfo({...info,mail:e.target.value})}
                className={cl.input} 
                placeholder="Ваша почта"type="e-mail">
                </input>
           <input 
                value={info.name}
                onChange={(e)=>setInfo({...info,name:e.target.value})}
                className={cl.input} 
                placeholder="Ваше имя" type="name">
                </input>

            {location=="http://localhost:3000/basket"?
            <input 
                value={info.address}
                onChange={(e)=>setInfo({...info,address:e.target.value})}
                className={cl.input} 
                placeholder="Ваш город" type="address">
                </input>
                :
                <></>}
           <MyButton onClick={getUser}>Оставить заявку</MyButton>
           
           
        </div>
    )
}