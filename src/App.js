import logo from './logo.svg';
import './App.css';
import {Row,Col,Container} from 'react-bootstrap';
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import Expenses from './components/Expenses';
import Footer from './components/Footer';
import {AppProvider} from './AppContext';
import TotalBudget from './components/TotalBudget';
import TotalExpense from './components/TotalExpense';
import AmountLeft from './components/AmountLeft';
import ChangeCurrency from './components/ChangeCurrency';
import ChangeBudget from './components/ChangeBudget';

function App() {
  
  return (
    <>
    <Header></Header>
    <Container>
      <AppProvider>
      <ChangeCurrency></ChangeCurrency>
     
      <Row>
      <TotalBudget></TotalBudget>
    <TotalExpense></TotalExpense>
   <AmountLeft></AmountLeft>
      </Row>
    

      <AddExpense></AddExpense>

      <Expenses></Expenses>
      </AppProvider>
      <Footer></Footer>
    </Container>
    </>
  );
 
}

export default App;
