import React from "react";
import cl from "./MyButton.module.css"

export const MyButton=({children,...props})=>{ 

    return( 
        <button className={cl.myBTN} {...props}>{children}</button> 
    )

}