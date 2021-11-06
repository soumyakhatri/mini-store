import logo from './logo.svg';
// import './App.css';
import { inventoryData } from './data';
import Inventory from './features/inventory/Inventory';
import Cart from './features/cart/Cart';
import CurrencyFilter from './features/currencyFilter/CurrencyFilter';
import { SearchTerm } from './features/searchTerm/SearchTerm';

function App(props) {
  
  const {state, dispatch} = props
  return (
    <div className="App">
      <CurrencyFilter
        currencyFilter = {state.currencyFilter}
        dispatch = {dispatch}
      />
      <SearchTerm
        searchTerm = {state.searchTerm}
        dispatch = {dispatch}
      />
      <Inventory
        inventory = {getFilteredItems(state.inventory, state.searchTerm)}
        currencyFilter = {state.currencyFilter}
        searchTerm = {state.searchTerm}
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

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}