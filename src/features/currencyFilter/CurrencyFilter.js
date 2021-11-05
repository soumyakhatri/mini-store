import React from 'react'
import { currenciesData } from '../../data'
import { convertToOtherCurrency } from '../utilities/utilities'
import { setCurrency } from './currencyFilterSlice'

function CurrencyFilter(props) {
    const { currencyFilter, dispatch } = props

    function changeCurrency(currency) {
        dispatch(setCurrency(currency));
        convertToOtherCurrency(currencyFilter, currency);
    }

    const createCurrencyButtons = (currency) => {
        return <button
            className={`currency-button ${currencyFilter === currency && 'selected'
                }`}
            key={currency}
            onClick={() => changeCurrency(currency)}
        >{currency}
        </button>
    }
    return (
        <div>
            {currenciesData.map(createCurrencyButtons)}
        </div>
    )
}

export default CurrencyFilter
