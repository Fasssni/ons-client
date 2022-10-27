import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../..";
import { ModalReg } from "../ModalReg/ModalReg";
import { MyButton } from "../UIs/MyButton/MyButton";
import cl from "./Adder.module.css";


export const Adder=({mod,setMod})=>{

const {device}=useContext(Context)
    
  

    return( 
        <div className={cl.main}> 
            <MyButton onClick={()=>setMod(true)}>Добавить товар</MyButton>

            
          
        </div>
    )
}