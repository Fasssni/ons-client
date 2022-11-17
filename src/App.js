import NavBar from "./UI/NavBar/NavBar";
import "./styles/main.css"
import Loader from "./UI/NavBar/Loader/Loader";
import MyBurgerMenu from "./UI/BurgerMenu/MyBurgerMenu";
import React, { useContext } from "react";

import { useState,useEffect } from "react";
import Shop from "./pages/Shop";
import { BrowserRouter, Redirect, Route,Router,Switch  } from "react-router-dom";
import { ModalReg } from "./UI/ModalReg/ModalReg";
import { MyForm } from "./UI/Form/MyForm";
import { Context } from ".";
import { AppRoter } from "./UI/AppRoter";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./consts/consts";
import { publicRoutes } from "./routes";
import { Auth } from "./pages/Auth";
import { check } from "./http/userAPI";
import { ModalAdd } from "./UI/ModalAdd";
import { About } from "./pages/About";
import { Basket } from "./pages/Basket";
import { Crm } from "./UI/CRM/Crm";
import { Catalog1 } from "./pages/Catalog1";
import { Catalog2 } from "./pages/Catalog2";
import { Media } from "./pages/Media";
import { store } from "./reducers";
import { saveState } from "./localStorage";





function App() {
  
  const {user}=useContext(Context)
  
  
  const [menu,setMenu]=useState([{title:"О нас",href:"/about"},{title:"Каталог",href:SHOP_ROUTE},{title:"Медиа",href:"/media"}])

 
  const [theme,setTheme]=useState(false);
  const [search,setSearch]=useState("")
  const [modal,setModal]=useState(false)

  const [searched,setSearched]=useState(false)

  
  
  
  const {device}=useContext(Context)

  store.subscribe(()=>{ 
    saveState( 
        { 
          items: store.rootState.getState().items,
          total: store.rootState.getState().total,
          userInfo: store.rootState.getState().userInfo,
        }
    )
})
  

  const dev=device.devices
  const isAuth=user.isAuth



  
  const list=dev.filter((device)=>device.title.toLowerCase().includes(search.toLowerCase()))

  console.log(list)
 
  
  

  const [loading, setLoading] = useState(true)

 

    useEffect(() => {
  
      
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    const loader=()=><Loader></Loader>

    if(loading){
      
      
      return(<Loader></Loader>)
    }

    
  
    

  
   



    

  
  
  


  return (
    <div className="App" onClick={()=>setTheme(false)}> 

   
     
     
      
     
    
     


     

    
    
    <BrowserRouter>


       
    
      <NavBar setSearched={setSearched} modal={modal} setModal={setModal}  list={list} search={search} setSearch={setSearch}  setMenu={setMenu}men={menu} theme={theme} setTheme={setTheme}/>
      <MyBurgerMenu  theme={theme} setTheme={setTheme}></MyBurgerMenu>
      
      
        <Route path={REGISTRATION_ROUTE}>
          <Auth setTheme={setTheme}/>
        </Route>
        <Route path={LOGIN_ROUTE}>
          <Auth setTheme={setTheme}/>
        </Route>
        <Route path={SHOP_ROUTE}>
          <Shop search={search} list={list} searched={searched} theme={theme}setTheme={setTheme}/>
        </Route>

        <Route path="/about">
          <About searched={searched} theme={theme}setTheme={setTheme}/>
        </Route>

        <Route path="/basket">
            <Basket></Basket>
         </Route>

         <Route path="/crm">
            <Crm></Crm>
         </Route>
        
         <Route path="/catalog1">
            <Catalog1></Catalog1>
         </Route>

         <Route path="/catalog2">
            <Catalog2></Catalog2>
         </Route>

         <Route path="/media"> 
            <Media></Media>
         </Route>
       
          
       {isAuth? 
       <Redirect to={SHOP_ROUTE}/>
       :
       <Redirect to="/about"/>
       }
        
      
      


    </BrowserRouter>



      
     {/* 
      <Shop   authMenu={authMenu} setMenu={setMenu}men={menu} theme={theme} setTheme={setTheme}/> */}
      
    </div>
  );
}

export default App;
