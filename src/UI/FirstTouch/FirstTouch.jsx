import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../../consts/consts";
import { MyBtn } from "../UIs/MyBtn/MyBtn";
import { MyButton } from "../UIs/MyButton/MyButton";
import cl from "./FirstTouch.module.css"

export const FirstTouch=()=> { 

   
    const [isChosen,setChosen]=useState([{c:"Для себя",isClicked:true},{c:"Для бизнеса",isClicked:true},{c:"Я продаю",isClicked:false}])
    
    const change=(p)=>{
        return( 
            setChosen({...p,isClicked:!p.isClicked})
        )
    }

    return( 
        <div className={cl.box} onClick={(e)=>e.stopPropagation()}> 
           <div >
            <h1>Для чего вам запчасти?</h1>
            <div className={cl.down}>
            {
                isChosen.map((p)=>
                    
                    
             
                    <MyBtn>{p.c}</MyBtn>
                
                )
            }
            </div>
              <MyButton style={{marginTop:"100px"}}
              ><Link to={REGISTRATION_ROUTE}> Дальше</Link></MyButton>

            </div>
            


        </div>
    )
}