import React from "react";
import { Link, useHistory } from "react-router-dom";
import MySearch from "../MySearch/MySearch";
import cl from "./NavBar.module.css"
import { useContext } from "react";

import { REGISTRATION_ROUTE } from "../../consts/consts";
import { Context } from "../..";
import { BASKET, LOGO, LOGO1, LOGO2, WISH } from "../Uconsts";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import img from "../../img/zag2.png"



const NavBar=({setSearched,list, setTheme,theme,men, setMenu,authMenu,search,setSearch,modal,setModal})=>{

   const {user}=useContext(Context)
   const {device}=useContext(Context)
   const history=useHistory()

   const dispatch=useDispatch()
   const basket=useSelector(state=>state.basket)
   
   


   const logOut=()=>{
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
    window.location.reload()
    history.push(REGISTRATION_ROUTE)
   }


   


    
    var i=1;

    console.log(user.isAuth)
    

    return(
        <div className={cl.main} onClick={(e)=>e.stopPropagation()}>

<svg className={cl.svg} onClick={()=>setTheme(!theme)} width="30px" height="30px" viewBox="0 0 48 48" >
    <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill=" #0072ff"/>
    <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill=" #0072ff"/>
    <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill=" #0072ff"/>
</svg> 

        
             <svg className={cl.logo} width="40px" height="40px" fill="#0072ff"  viewBox="0 0 48 48">
               
                    <path  d={LOGO}/>
                 
                
              </svg>
        
            
            {/* <h1 className={cl.logo}>ВсеЗапчасти</h1> */}
            <ul className={cl.NavBar}>
                {men.map((p)=>
              <li key={i+90}   className={cl.li}><Link to={p.href}>{p.title}</Link></li>)}
              
            </ul>

            <MySearch setSearched={setSearched} list={list} search={search} setSearch={setSearch}></MySearch>

            <div className={cl.icon} > 
                
                 <svg width="24" height="24" fill="#0072ff"  viewBox="0 0 24 24">
                    <path  d={WISH}/>
                 </svg>
              </div>

            <div  className={cl.icon} > 
                <Link to="/basket">
                     {basket.items.length>0?
                     <span className={cl.count}>{basket.items.length}</span>
                     :
                    <></>}
                     <svg width="24" height="24" fill="#0072ff"  viewBox="0 0 24 24">
                          <path  d={BASKET}/>
                     </svg>
                 </Link>
            </div>
           {user.isAuth?
            <div className={cl.crm}>
                <Link to="crm">
                <img  className={cl.img} src={img}></img>
                </Link>
            </div>
            :
            <></>}
            
            {user.isAuth?
            <button className={cl.btn} onClick={logOut}>Выйти</button>
            : 
            <button className={cl.btn}onClick={()=>history.push(REGISTRATION_ROUTE)} >Войти</button>
}
           
            

            
           
        </div>
    )
}


export default NavBar;