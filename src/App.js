import logo from './logo.svg';
// import './App.css';
import { inventoryData } from './data';
import Inventory from './features/inventory/Inventory';
import Cart from './features/cart/Cart';
import CurrencyFilter from './features/currencyFilter/CurrencyFilter';

function App(props) {

  const {state, dispatch} = props
  return (
    <div className="App">
      <CurrencyFilter
        currencyFilter = {state.currencyFilter}
        dispatch = {dispatch}
      />
      <Inventory
        inventory = {state.inventory}
        currencyFilter = {state.currencyFilter}
        dispatch= {dispatch}
      />
      <Cart
        cart = {state.cart}
        currencyFilter = {state.currencyFilter}
        dispatch= {dispatch}
      />
    </div>
  );
}

export default App;
