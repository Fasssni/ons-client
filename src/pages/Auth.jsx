import React from "react";
import { MyForm } from "../UI/Form/MyForm";
import { Context } from "..";
import { useContext } from "react";

export const Auth=({setTheme})=>{ 
    const {user}=useContext(Context)
    return( 
        <div className="auth" onClick={()=>setTheme(false)}>
        
            <MyForm user={user}>

            </MyForm>

        </div> 
    )
}