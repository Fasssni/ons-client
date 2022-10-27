import img from "../img/example.jpg"

const defaultState={ 
   
        items:[], 

        total:0,

        userInfo:[{name:"Insaf",mail:"sadikovisaf@99gmail.com", address:"Kazan"}]

       
        

    }


export const basketReducer=(state=defaultState,action)=>{ 
    switch(action.type){
        case "ADD_ITEM":
            return{
                ...state,
                items:[...state.items, action.payload],
                total:parseInt(state.total)+parseInt(action.payload.price)
            }
        case "REMOVE_ITEM":
            return{
                ...state,
                items:state.items.filter((e)=>e.id!==action.payload.id),
                total:parseInt(state.total)-parseInt(action.payload.price)
            }

        case "GET_USER":
            return{ 
                ...state,
                userInfo:[...state.userInfo,action.payload]
              
            }

        case "COUNT":
             return{ 
                ...state, 
                total:state.total-parseInt(action.payload.price)+parseInt(action.payload.price*action.payload.count)
             }

        default:
            return state

    }
}