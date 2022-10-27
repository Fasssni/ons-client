import React, { useState } from "react";
import cl from "./MyBtn.module.css"

export const MyBtn=({children})=>{ 
    const [isChecked,setChecked]=useState(true)

    return( 
        <button className={isChecked?cl.chosen
            :cl.nonChosen}  onClick={()=>setChecked(!isChecked)}>
            {children}
        </button>
    )
}