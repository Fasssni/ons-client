import img from "../img/example.jpg"
import { loadState } from "../localStorage"


const loadedState=loadState()

const defaultState={ 
   
        items:[], 

        total:parseInt(0),

        userInfo:[{name:"Insaf",mail:"sadikovisaf@99gmail.com", address:"Kazan"}],

        loadState



       
        

    }


export const basketReducer=(state=defaultState,action)=>{ 
    switch(action.type){
        case "ADD_ITEM":
            
            

            return{
                ...state,
                items:[...state.items,action.payload],
                
            }
        case "REMOVE_ITEM":

            let sum

            return{
                ...state,
                items:state.items.filter((e)=>e.id!==action.payload.id),
                total:
                    
                 !state.items?
                    
                   state.items?.map((p)=>{
                   
                    
                    sum=parseInt(sum)+ +Number(parseInt(p.count)*parseInt(p.price))
                    return(parseInt(sum))
                    }
                    )

                    :
                    0
                    
             

            }

        case "GET_USER":
            return{ 
                ...state,
                userInfo:[...state.userInfo,action.payload]
              
            }

        case "COUNT":

            let count 

            state.items.map((item)=>item.id==action.payload.id
                ?item.count=action.payload.counter
                 
                :item
            )
            console.log(state.items)
            // state.items.map((item)=>item.id==action.payload.id?item.count=action.payload.counter:1)
              
            let amount=0
            
            

             return{ 
                ...state,
                
                total:state.items.map((p)=>{
                   
                    
                    amount=parseInt(amount)+ +Number(parseInt(p.count)*parseInt(p.price))
                    return(parseInt(amount))
                    }
                    )
             }

        default:
            return state

    }
}