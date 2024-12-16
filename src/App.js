import './App.css';
import Header from './components/Header';
import Balance from "./components/Balance";
import Transactionlist from "./components/Transactionlist";
import IncomeExpences from "./components/IncomeExpences";
import AddTransaction from "./components/AddTransaction";

//import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    //<GlobalProvider>
    <div className="App">
      <Header/>
      <div classname="container">
        <Balance/>
        <IncomeExpences/>
        <Transactionlist />
        <AddTransaction/>
        </div>     
    </div>
    //</GlobalProvider>
  );
}

export default App;
