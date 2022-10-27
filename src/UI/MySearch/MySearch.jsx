import React from "react";
import cl from "./MySearch.module.css"
import { useMemo } from "react";
import { SEARCH } from "../Uconsts";
import { useHistory } from "react-router-dom";
import { SHOP_ROUTE } from "../../consts/consts";


const MySearch=({setSearched,search,list, setSearch})=>{

  

    var i=0

    const history=useHistory()
  

  
    
    return(
        <div className={cl.main}>
        <button onClick={()=>setSearched(true)} className={cl.BTN}>
        <svg   width="24" height="24" fill="#0072ff"  viewBox="0 0 24 24">

        <path  d={SEARCH}/>
       
        </svg>
        </button>    
        <div>
        <input  value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Найти запчасть"className={cl.input}> 
        {console.log(list)}
         
        
        </input> 
        <div className={search.length>=1?cl.list:cl.list__none}>
            {list.map((p)=>{
                
            return( <p className= {cl.p} key={i++} onClick={()=>history.push(SHOP_ROUTE)}>{p.title}</p>)})}
        </div>
        </div> 
        </div> 
    )
}


export default MySearch;