import React, { useEffect } from 'react'
import { addItem } from '../../../../mini-store-self/src/features/cart/cartSlice'
import { convertToOtherCurrency, currencySymbol, filterInventory } from '../utilities/utilities'
import { loadData } from './inventorySlice'

function Inventory({ inventory, currencyFilter, searchTerm, dispatch }) {
    const onMount = () => {
        dispatch(loadData())
    }
    useEffect(onMount, [])

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem))
    }


    const createInventoryItem = (inventoryItem) => {
        const { name, img, price } = inventoryItem
        return (
            <li key={name} className="item">
                <img src={img} />
                <h3>{name}</h3>
                <h3 className="price">{currencySymbol(currencyFilter)}{convertToOtherCurrency(price, currencyFilter)}</h3>
                <button
                    onClick={() => onClickHandler(inventoryItem)}
                    className="add-to-cart-button"
                >
                    Add to cart
                </button>
            </li>
        )
    }   

    // if (inventory.length === 0) {
    //     return <p>Sorry, no products are currently available...</p>
    // }

    return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>

}

export default Inventory
