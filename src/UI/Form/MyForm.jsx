import React, {useContext, useState,} from "react";
import { Link, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../consts/consts";
import { login, registration } from "../../http/userAPI";
import { ModalReg } from "../ModalReg/ModalReg";
import cl from "./MyForm.module.css"
import { REGISTRATION_ROUTE } from "../../consts/consts";

export const MyForm=({setModal,user})=> {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    
    const isLogin=window.location.pathname===LOGIN_ROUTE
    var info
    const history=useHistory()

    const click=async()=>{
        try{ 
            let data
            if(isLogin){
          
                data=await login(email,password)
                console.log(data)
               
            }
            else{ 
                data=await registration(email,password,name)
                console.log(data)
                
            }
            user.setUser(user)
            user.setIsAuth(true)
            console.log(user.isAuth)
            window.location.reload()
            history.push(SHOP_ROUTE)
        }catch(e){
           alert(e.message)

        }
      
        setEmail()
        setPassword()

    } 

    console.log(window.location.pathname)
        
   

    
  


    
    return( 
        <div className={cl.main}> 

        <input 
           placeholder="Введите Вашем имя" 
           type="name" 
           className={cl.inputs}
           value={name}
           onChange={e=>setName(e.target.value)}></input>

        <input placeholder="Введите Ваш e-mail"
           type="e-mail" 
           className={cl.inputs}
           value={email}
           onChange={e=>setEmail(e.target.value)}></input> 

        <input placeholder="Придумайте парол" 
           type="password" 
           className={cl.inputs}
           value={password} 
           onChange={e=>setPassword(e.target.value)}></input>
        <button className={cl.BTN} 
            onClick={()=>click()}>{isLogin? "Войти" :"Зарегистрироваться"
            }</button>
            {isLogin
            ? 
            <p>Нет аккаунта?<Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link></p>
            :
            <p>Есть аккаунт?<Link to={LOGIN_ROUTE}>Войти</Link></p>
        }
        </div>
    )
 }
