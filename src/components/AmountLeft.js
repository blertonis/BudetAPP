import {Col} from 'react-bootstrap';
import { AppContext } from '../AppContext';
import {useContext} from 'react';


const AmountLeft = () =>{

    const {budget,exp,currency} = useContext(AppContext);

    const totalExpenses = exp.reduce((total, item) => {
		return (total += item.price);
	}, 0);

    return(       <Col md="4">

    <div class="alert alert alert-dark text-center" role="alert">
Amount left: <span className="bold">{currency}{(budget - totalExpenses).toLocaleString()}</span>
</div>
    </Col>)
}

export default AmountLeft;