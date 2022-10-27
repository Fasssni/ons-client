import React, { useState } from "react";
import cl from "./Basket.module.css"
import { useSelector } from "react-redux";
import { PaymentForm } from "../UI/PaymentForm/PaymentForm";
import {MyButton} from "../UI/UIs/MyButton/MyButton"
import { ModalAdd } from "../UI/ModalAdd";
import { UserForm } from "../UI/UserForm/UserForm";
  

export const Basket=()=> { 

    const [form,setForm]=useState(false)

    const basket=useSelector(state=>state.basket)

    return( 
        <div className={cl.main}>
            <div className={cl.items}>
                {basket.items.length==0?
                <h3 style={{
                    marginRight:"auto",
                    marginLeft:"20%"}}> У вас пока нет товаров в корзине</h3>
                :
                basket.items.map((p)=>
                <PaymentForm p={p}></PaymentForm>
               )}
                

            </div>

            <div className={cl.payment}>
                <MyButton onClick={()=> setForm (true)}style={{
                    width:"90%"
                }}>Оформить</MyButton>
               
                <div className={cl.info}>
                    <div className={cl.string}>
                      <h3>Ваша корзина</h3>
                    </div> 
                    <div className={cl.string}></div>
                        <p>Товары({basket.items.length})</p>
                   
                </div>
                <div className={cl.line}></div>

                <div className={cl.string}>
                    <h2>Общая стоимость</h2>
                    <h2>{basket.total}P</h2> 
                </div>

            </div>
            <ModalAdd mod={form} setMod={setForm}>
                <UserForm></UserForm>
            </ModalAdd>
         </div>
            
           
           
       
    )
}