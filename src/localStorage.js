
export const saveState=(state)=>{ 
    try{ 
        const serialState=JSON.stringify(state); 
        localStorage.setItem("appState",serialState)
    }catch(err){ 
        console.error(err)
    }

}


export const loadState=(state)=>{ 
    try{ 
        const serialState=localStorage.getItem("appState")
        if(serialState==null){ 
            return undefined
        }
        return JSON.parse(serialState)

    }catch(err){
        console.error(err)
    }


}