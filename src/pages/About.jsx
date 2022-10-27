import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE, SHOP_ROUTE } from "../consts/consts";
import { FirstTouch } from "../UI/FirstTouch/FirstTouch";
import { ModalAdd } from "../UI/ModalAdd";
import { CHECK, DELIVERY, LOOP } from "../UI/Uconsts";
import { MyButton } from "../UI/UIs/MyButton/MyButton";
import { UserForm } from "../UI/UserForm/UserForm";
import cl from "./About.module.css"


export const About=()=>{ 
    const [isClicked, setIsClicked]=useState(false)
    const [footer,setFooter]=useState(false)

    const illust=[{title:'Найдите то, что вам нужно', svg:LOOP},
                  {title:'Сделайте заказ', svg:DELIVERY}, 
                  {title:'Примите доставку Ваших запчастей', svg:CHECK},]

    return(
        <div className={cl.main}>
            <div className={cl.text}>
                 <h1><b>ВсеЗапчасти</b>- удобная платформа для покупки и продажи автозапчастей</h1>
                 <p className={cl.p}>Покупайте и продавайте автозапчасти для себя и Вашего бизнеса в одном месте</p>
                 <MyButton onClick={()=>setIsClicked(true)} style={{height:"2.5rem"}}>Попробовать бесплатно</MyButton>
                 <ModalAdd setMod={setIsClicked} mod={isClicked}>
                   <FirstTouch></FirstTouch>
                 </ModalAdd>
                 <h1 style={{marginTop:"3rem"}}>Как это работает?</h1> 
                 
                 {illust.map((p)=>
                    <div className={cl.steps}>
                                <div className={cl.vertical} key={p.title}></div>
                                <svg style={{marginLeft:"12vh"}}width="120" height="120" fill="#0072ff"   viewBox="0 0 50 50">
                                  <path  d={p.svg}></path>
                                 </svg>
                                 <h1 style={{marginTop:"-4rem"}}>{p.title}</h1>
                    </div>)}
                    <MyButton style={{height:"2.5rem"}}><Link to={SHOP_ROUTE}>Начать</Link></MyButton>

                    
                   
                 
                 
            </div>
            <div className={cl.footer}>
                        <h1>Остались вопросы?</h1>
                        <p style={{marginBottom:"1rem"}}>заполните форму ниже - мы свяжемся с Вами</p>
                        <MyButton onClick={()=>setFooter(!footer)} className= {cl.btn} >Связаться</MyButton>
                        
                        <ModalAdd setMod={setFooter} mod={footer}>
                          <UserForm></UserForm>
                            
                        </ModalAdd>

                    </div>
            
         

        </div>
    )
}