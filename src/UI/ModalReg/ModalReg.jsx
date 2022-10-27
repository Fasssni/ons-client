import React,{useState} from "react";
import { MyForm } from "../Form/MyForm";
import cl from "./ModalReg.module.css"



export const ModalReg=({children,modal,setModal})=>{
    
    

    return( 
        <div className={modal 
            ? cl.main
            : cl.main__none}
            onClick={()=> 
            setModal(!modal)}>
            <div onClick={e=>e.stopPropagation()}className={cl.wind}>
                <MyForm></MyForm>
            </div>
        </div>
    )

}