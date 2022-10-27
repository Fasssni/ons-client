import {makeAutoObservable} from "mobx";

import img from "../img/example.jpg"
import img12 from "../img/catalog1.jpg";
import img1 from "../img/cat2.jpg";
import img2 from "../img/cat3.jpg";
import img3 from "../img/cat4.jpg";
import img4 from "../img/cat21.jpg";
import img5 from "../img/cat22.jpg";
import img6 from "../img/cat23.jpg";
import img7 from "../img/cat24.jpg";


export default class DeviceStore {
    constructor() {
        this._types = [{type:"Phones"},{type:"cars"},]
        this._brands = []
        this._devices = [
        {id:0, title:"Масло трансмисионное",description:"this is a greatphone", price:"900", img:img},
        {id:1, title:"Масло трансмиссионное",description:"ZIC GFT 75W-90 Полностью синтетическое масло для механических трансмиссий и мостов легковых и грузовых автомобилей, также строительной техники, требующих вязкости по SAE 75W-90 или 80W-90 и категорию по API GL-4, GL-5 или МТ-1. Изготовлено на основе полиальфаолефинов (ПАО) и собственного синтетического базового масла Yubase.", price:"1074", img:img12},
        {id:2, title:"Жидкость стеклоомывателя ",description:"Предназначен для использования в системе омывания стекол в летний период. Уникальная химическая формула позволяет эффективно удалять грязь, соль, нефтяную пленку, следы от насекомых. Не оставляет биологических загрязнений, бликов, масляных пятен и разводов на стекле, повышая уровень безопасности управления автомобилем. Жидкость безвредна для лакокрасочных покрытий, резиновых и пластиковых деталей, не наносит вреда здоровью человека и окружающей среде", price:"133",img:img1},
        {id:3,title:"Жидкость тормозная",description:"Тормозная жидкость, предназначенная для использования в гидроприводах тормозных систем и сцеплений автомобилей отечественного и зарубежного производства. Температура кипения сухой жидкости – не менее +240 °С. Не оказывает отрицательного воздействия на детали тормозной системы и обладает высокой термической стабильностью. Соответствует требованиям стандарта FMVSS № 116 DOT4. Совместима со всеми тормозными жидкостями классов DOT3, DOT4, Нева, Роса", price:"700",img:img2},
        {id:4, title:"Жидкость гидравлическая",description:"Жидкость для централизованных гидросистем febi 06161 (синтетическая) разработана для применения в системах централизованной гидравлики, регулирования дорожного просвета, гидропневматических подвесок, а также амортизации и рулевого управления в диапазоне от –40 °C до +130 °C. Окрашена в зелёный цвет.", price:"1000",img:img3},
        {id:5, title:"Масло трансмиссионное",description:"ZIC GFT 75W-90 Полностью синтетическое масло для механических трансмиссий и мостов легковых и грузовых автомобилей, также строительной техники, требующих вязкости по SAE 75W-90 или 80W-90 и категорию по API GL-4, GL-5 или МТ-1. Изготовлено на основе полиальфаолефинов (ПАО) и собственного синтетического базового масла Yubase.", price:"1074", img:img},
        {id:Date.now(), title:"Шина зимняя VIATTI",description:"Шина зимняя R15 185/65R15 Viatti Brina Nordico V-522 88T (с шипами) Страна производства: Россия2", price:"3600", img:img4},
        {id:Date.now(), title:"Шина летняя CORDIANT ",description:"Автошина R16 205/55 Cordiant Sport-3 PS-2 91V (лето)", price:"5098",img:img5},
        {id:Date.now(),title:"Диск колесный TREBL",description:"Trebl 64A50C Black 6*15/4*100 d60,1 ЕТ50. Изображение является образцом модели диска, количество отверстий и размерможет отличаться.", price:"1860",img:img6},
        {id:Date.now(), title:"Чехлы AIRLINE",description:"Чехлы для колес, размер R 13-17, без ручек, спанбонд, комплект 4 шт., цвет черный (AO-WC-13)", price:"1000",img:img7},
        {id:Date.now(), title:"Шина зимняя VIATTI",description:"Шина зимняя R15 185/65R15 Viatti Brina Nordico V-522 88T (с шипами) Страна производства: Россия2", price:"3600", img:img4}
]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._searched=[{id:0, title:"Apple",description:"this is a greatphone", price:"$900"}]
        
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(device) {
        this._devices = [...this.devices, device]
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBran(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    
    setSearched(searched){ 
        this._searched=searched
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}