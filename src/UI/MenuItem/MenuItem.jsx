import React, { useState } from "react";
import { Link } from "react-router-dom";
import cl from "./MenuItem.module.css"

export const MenuItem=({p,theme})=>{ 

    const [isHovered,setIsHovered]=useState(false)

    return( 
        <div className={theme?cl.container:cl.passive}>
                <h3 onMouseOver={()=>setIsHovered(true)} 
                    onMouseOut={()=>setIsHovered(false)}
                className={theme?cl.item:cl.passive}><Link to={p.link}>{p.title}</Link></h3>
                {isHovered?
                 <div className={cl.added}
                    onMouseOver={()=>setIsHovered(true)} 
                    onMouseOut={()=>setIsHovered(false)}>
                        {
                            p.items.map((e)=>
                            <p  className={cl.additions}><Link to={p.link}>{e}</Link></p> )
                        }

                 </div>
                 :
                 <></>}
                </div>
    )
}