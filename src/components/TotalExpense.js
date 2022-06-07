import {Col} from 'react-bootstrap';
import { AppContext } from '../AppContext';
import {useContext} from 'react';


const TotalExpense = () =>{

    const {exp,currency} = useContext(AppContext);



    const totalExpenses = exp.reduce((total, item) => {
		return (total += item.price);
	}, 0);

    return(          <Col md="4">

    <div class="alert alert-danger text-center" role="alert">
Expenses: <span className="bold">-{currency}{totalExpenses.toLocaleString()}</span>
</div>
    </Col>)
}

export default TotalExpense;