import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./Crm.module.css"

export const Crm=()=>{ 
    const dispatch=useDispatch()
    const basket=useSelector(state=>state.basket)

    if(basket.userInfo==0){
        return(
            <h3 className={cl.ifno}>У нас пока нет клиентов,но скоро будут!</h3>
        )
    }

    return( 
        <div className={cl.main}>

            <div className={cl.fuck}>
                <h3 className={cl.part}>Имя</h3> 
                <h3 className={cl.part}>Контакт</h3> 
                <h3 className={cl.part}>Адрес</h3>
                
        
                 <h3 className={cl.part}>Товары</h3>
                 <h3 className={cl.part}>Итоговая стоимость</h3> 
                
                </div>
        


            {basket.userInfo.map((p)=>
            <div className={cl.fuck}>
                <p className={cl.part}>{p.name}</p> 
                <p className={cl.part}>{p.mail}</p> 
                <p className={cl.part}>{p.address}</p>
                <div  className={cl.part}>
              {basket.items.map((e)=>
                        
                         <p>{e.title}</p>
                         )}
                </div>
                     <div className={cl.part}>{basket.total}P</div> 
                
                </div>)} 
        

        



        </div> 
    )
}