import React from 'react'
import { calculateTotal, currencySymbol } from '../utilities/utilities';
import { changeItemQuantity } from './cartSlice';

function Cart(props) {

    const { cart, dispatch, currencyFilter } = props
    const onInputChangeHandler = (name, num) => {
        const number = Number(num)
        dispatch(changeItemQuantity(name, number))
    }

    let cartElements = [];

    const createCartItems = (name) => {

        const arrOneToHundred = Array.from(Array(100).keys())

        const item = cart[name]

        if (item.quantity === 0) {
            return;
        }

        return (
            <li key={name}>
                <p>{name}</p>
                <select
                    className="item-quantity"
                    value={item.quantity}
                    onChange={(e) => onInputChangeHandler(name, e.target.value)}
                >
                    {arrOneToHundred.map(num => <option key={num} value={num}>{num}</option>)}
                </select>
            </li>
        )
    }

    cartElements = Object.keys(cart).map(createCartItems)

    const itemNames = Object.keys(cart).map(name=> name)
    
    const total = calculateTotal(cart, itemNames, currencyFilter)

    return (
        <div id="cart-container">
            {Object.keys(cart).length ? <h1>Cart</h1> : null}
            <ul id="cart-items">{cartElements}</ul>
            <h3 className="total">Total <span className="total-value">{currencySymbol(currencyFilter)} {total}</span></h3>
            
        </div>
    )
}

export default Cart
