import React, { useContext, useEffect, useState } from "react";
import MyProduct from "../UI/MyProduct/MyProduct";
import { Context } from "../index";
import { Adder } from "../UI/Adder/Adder";
import { ModalAdd } from "../UI/ModalAdd";
import { fetchDevices } from "../http/deviceAPI";
import { MyButton } from "../UI/UIs/MyButton/MyButton";






const Shop=({theme,search, list, setTheme,searched})=>{ 

  const {device}=useContext(Context)
  const {user}=useContext(Context)

  const dev=device.devices
  const [mod,setMod]=useState(false)
  console.log(user)

  var i=10;
    

  const [devi, setDev]=useState({id:i++,title:'',description:"", price:"", file:""})

  const addFunction=()=>{ 
    device.setDevices(devi)
    console.log(dev,dev.file)
    setMod(false)
    return( 
        setDev({id:i++,title:'',description:"", price:""})
    )
}


  
    useEffect(()=>{ 
      
      fetchDevices().then(data=>device.setDevice(data.rows))
    },[])

    return( 
       <div  onClick={()=>setTheme(false)} className={theme?"text2":"text"}>
        
       
        
        
      <MyProduct search={search} list={list} searched={searched} device={dev} dev={device}></MyProduct>
      {user.isAuth?
      <>
      <Adder mod={mod} setMod={setMod}></Adder>
       
     <ModalAdd mod={mod} device={device} setMod={setMod}>

     <div className="inner" onClick={(e)=>e.stopPropagation()}>
            
                 <input className="input" placeholder="Укажите имя товара" value={devi.title} onChange={(e)=>setDev({...devi,title:e.target.value})}></input> 
                 <input className="input" placeholder="Описание товара" value={devi.description} onChange={(e)=>setDev({...devi,description:e.target.value})}></input> 
                 <input className="input" placeholder="Цена" value={devi.price} onChange={(e)=>setDev({...devi,price:e.target.value})}></input> 
                 <label for="id">Выберите фотографию запчасти</label>
                 <input className="input" id="file" type="file" placeholder="Выберите фотографию" value={devi.file} onChange={(e)=>setDev({...devi,file:e.target.value})}></input> 
            
               <MyButton onClick={addFunction}>Добавить</MyButton>

        </div>

     </ModalAdd>
            </>
       :
       <></>

        
    
    }
     
             
     
       </div>
    )
}

export default Shop;