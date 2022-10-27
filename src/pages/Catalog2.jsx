import React, { useState } from "react";
import { ProductForm } from "../UI/ProductForm/ProductForm";

import img4 from "../img/cat21.jpg";
import img5 from "../img/cat22.jpg";
import img6 from "../img/cat23.jpg";
import img7 from "../img/cat24.jpg";


export const Catalog2=()=>{ 

    

 const catalog= [
    {id:Date.now(), title:"Шина зимняя VIATTI",description:"Шина зимняя R15 185/65R15 Viatti Brina Nordico V-522 88T (с шипами) Страна производства: Россия2", price:"3600", img:img4},
    {id:Date.now(), title:"Шина летняя CORDIANT ",description:"Автошина R16 205/55 Cordiant Sport-3 PS-2 91V (лето)", price:"5098",img:img5},
    {id:Date.now(),title:"Диск колесный TREBL",description:"Trebl 64A50C Black 6*15/4*100 d60,1 ЕТ50. Изображение является образцом модели диска, количество отверстий и размерможет отличаться.", price:"1860",img:img6},
    {id:Date.now(), title:"Чехлы AIRLINE",description:"Чехлы для колес, размер R 13-17, без ручек, спанбонд, комплект 4 шт., цвет черный (AO-WC-13)", price:"1000",img:img7},
    {id:Date.now(), title:"Шина зимняя VIATTI",description:"Шина зимняя R15 185/65R15 Viatti Brina Nordico V-522 88T (с шипами) Страна производства: Россия2", price:"3600", img:img4}]


    return( 
        <div className="whole">
            {catalog.map((p)=>
            
                     <ProductForm p={p}  ></ProductForm>)
             }
        </div>
    )
}