import {FaWindowClose} from 'react-icons/fa';
import { AppContext } from '../AppContext';
import {useContext} from 'react';

const Expenses = () =>{

    const {exp,setExp,currency} = useContext(AppContext);



  

    const deleteExpense = (id) =>{
        const newExpense = exp.filter((n)=> n.id != id);
        setExp(newExpense);
    }
    return(<div>
 <div class="list-group mt-5">
        {exp.map(e=>(
           
            <button className="d-flex justify-content-between">
               <span>{e.name}</span> 
               <span><span class="badge badge-danger">-{currency}{e.price.toLocaleString()}</span> <span className="delete" onClick={()=> deleteExpense(e.id)}><FaWindowClose></FaWindowClose></span></span>
           </button>
          
        ))}
         </div>

    </div>)
}


export default Expenses;