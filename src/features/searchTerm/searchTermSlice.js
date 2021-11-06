export function setSearchTerm(input) {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: input
    }
}

export function clearSearchTerm() {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

const initialSearchTerm = ''

export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload
            break;

        case 'searchTerm/clearSearchTerm':
            return ''
            break;

        default:
            return searchTerm
            break;
    }
}