import { AppContext } from '../AppContext';
import {useContext} from 'react';

const ChangeCurrency = () =>{

  const {setCurrency} = useContext(AppContext);


  const changem = (e) =>{
      let xx = e.target.value;
      if(xx=="eur"){
        setCurrency("€");
      }
      else if(xx=="gdp"){
        setCurrency("£");
      }
      else if(xx=="usd"){
        setCurrency("$");
      }
  }
    return(<>
    <select name="cars" id="cars" className="mb-2" onChange={changem}>
  <option value="usd">USD</option>
  <option value="gdp">GDP</option>
  <option value="eur">EUR</option>
  
</select>
    </>);
}

export default ChangeCurrency;