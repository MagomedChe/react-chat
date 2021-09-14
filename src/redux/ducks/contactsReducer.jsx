const initialState = {
    contacts: [],
    loading: false
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contact/load/start':
            return {
                ...state,
                loading: true
            }

        case 'contact/load/success':
            return {
                ...state,
                loading: false,
                contacts: action.payload
            }


        default:
            return state
    }
}

export const loadContacts = () => {
    return (dispatch) => {
        dispatch({type: 'contact/load/start'});
        fetch('https://api.intocode.ru:8001/api/contacts')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'contact/load/success',
                    payload: json
                })
            })
    }
}



