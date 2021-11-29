const initialState = {
    myId: [],
}

export const applicationReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'myId/success':
            return {
                myId: action.payload
            }




        default:
            return state
    }
}



export const loadMyId = () => {
    return (dispatch) => {
        fetch('https://api.intocode.ru:8001/api/profile')
            .then(response => response.json())
            .then(json => {
                dispatch ({
                    type: 'myId/success',
                    payload: json
                })
            })
    }
}

