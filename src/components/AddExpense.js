import {Col,Row} from 'react-bootstrap';
import {GoDiffAdded} from 'react-icons/go';
import {useState} from 'react';
import { nanoid } from 'nanoid';
import { AppContext } from '../AppContext';
import {useContext} from 'react';


const AddExpense = () =>{

        const [name,setName] = useState();
        const [amount,setAmount] = useState();
        const {exp,setExp} = useContext(AppContext);
        const [number,SetNumber] = useState(false);
            const addExp = () =>{

                if(!isNaN(amount) && name.length>=1){
                    SetNumber(false);
                    const newExp ={
                        id: nanoid(),
                        name:name,
                        price: parseInt(amount)
                      }
                 
                      const newArr = [...exp,newExp];
                      setExp(newArr);
                      setName("");
                      setAmount("");

                } else{
                   SetNumber(true)
                   

                }
               
            }
        
    return(<div className="var">
        
        
        <Row>
        
        <Col md="8" sm="8" xs="8" className="d-flex align-items-center">
            <input type="text" className="expense" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
            <input type="text" className="amount" placeholder="Amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
            
        </Col>
        <Col md="4" sm="4" xs="4" className="d-flex align-items-center justify-content-end">
            <button className="delete-button" onClick={addExp}> Add </button>
        </Col>
        {number==true ? (
				<p class="error">Enter item name or valid number</p>
			) : (
				<></>
			)}

        </Row>
    </div>)
}

export default AddExpense;