import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "..";
import { createDevice, fetchDevices } from "../http/deviceAPI";
import DeviceStore from "../store/DeviceStore";
import { MyButton } from "./UIs/MyButton/MyButton";


export const ModalAdd=({setMod,mod,children,...props})=>{ 

    var i=10;
    

    const {device}=useContext(Context)
    const [dev, setDev]=useState({id:i++,title:'',description:"", price:"", file:""})
    
    
    const clicker=async()=>{
       try{
       let data=await createDevice(dev)
       
       device.setDevices([...device.devices,dev])
       console.log(data)
       setMod(false)
       }catch(e){ 
       alert(e.message)
       }
       setDev({id:i++,title:'',description:"", price:"", file:""})
    }

    // useEffect(()=>{ 
      
    //     fetchDevices().then(data=>device.setDevice(data.rows))
    //   },[])
    const addFunction=()=>{ 
        device.setDevices(dev)
        console.log(dev,dev.file)
        setMod(false)
        return( 
            setDev({id:i++,title:'',description:"", price:""})
        )
    }
  



    return( 
        <div className={mod?'modal':'modal_none'} onClick={()=>setMod(false)}> 
        {children}
    </div>
    )
}