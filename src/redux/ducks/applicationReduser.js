const initialState = {
  myId: JSON.parse(sessionStorage.getItem('myId')) || '',
  loading: false
};

export const applicationReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'myId/start':
      return {
        ...state,
        loading: true
      }

    case 'myId/success':
      return {
        ...state,
        loading: false,
        myId: action.payload._id,
      };

    default:
      return state;
  }
};

export const loadMyId = () => {
  return (dispatch) => {
    dispatch({type: 'myId/start'});
    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem('myId', JSON.stringify(json._id))
        dispatch({
          type: 'myId/success',
          payload: json,
        });
      });
  };
};
