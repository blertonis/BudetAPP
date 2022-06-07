import { useState,createContext } from "react"

export const AppContext = createContext();
export const AppProvider = (props) =>{
   
    const [budget,setBudget] = useState(2500);
    const [currency,setCurrency] = useState("$");
    
    const [exp,setExp] = useState([
        {id:"1",name:"Groceries",price:200},
        {id:"2",name:"Hamburger",price:19},
        {id:"3",name:"Milk",price:5}
    ]);

    return(<div>
        <AppContext.Provider value={{budget,exp,setExp,currency,setCurrency,setBudget}}>
            {props.children}
        </AppContext.Provider>
    </div>);
}