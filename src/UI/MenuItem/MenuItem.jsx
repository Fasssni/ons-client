import React, { useState } from "react";
import { Link } from "react-router-dom";
import cl from "./MenuItem.module.css"

export const MenuItem=({p})=>{ 

    const [isHovered,setIsHovered]=useState(false)

    return( 
        <div className={cl.container}>
                <h3 onMouseOver={()=>setIsHovered(true)} 
                    onMouseOut={()=>setIsHovered(false)}
                className={cl.item}><Link to={p.link}>{p.title}</Link></h3>
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