import {Col} from 'react-bootstrap';
import { AppContext } from '../AppContext';
import {useContext,useState} from 'react';


const TotalBudget = () =>{
    const {budget,currency,setBudget} = useContext(AppContext);
    const [chbudget,setChbudget] = useState(false);
    const [newBudget,setNewBudget] = useState();


    const checkNumber = (val)=>{
        if(!isNaN(val)){
           return true;

        } else{
          
           return false;

        }
    }

    const changeBudget = () =>{
       setChbudget(true);
    }
    const changeB = () => {

        if(checkNumber(newBudget)==true && newBudget!=""){
            setBudget(newBudget);
        setChbudget(false);
        setNewBudget("");
       

        } 
        
    }

 


    

return(         <Col md="4">
<div class="alert alert-success text-center" role="alert">
Budget: <span className="bold">{currency}{budget.toLocaleString()} <button className="delete-button" onClick={changeBudget}>Change</button>

{chbudget==true ? (
				 <div className="mt-2"> <input type="text" id="changetext" onChange={(e)=> setNewBudget(e.target.value)}></input><button  onClick={changeB} className="fullwidth mt-1">Change</button></div>
			) : (
				<></>
			)}
 
</span>
</div>

</Col>)
}

export default TotalBudget;