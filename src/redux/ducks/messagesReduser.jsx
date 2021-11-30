const initialState = {
  messages: [],
  loading: false,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "messages/load/start":
      return {
        ...state,
        loading: true,
      };

    case "messages/load/success":
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };

    default:
      return state;
  }
};

export const loadMessages = (myId, contactId) => {
  return (dispatch) => {
    dispatch({ type: "messages/load/start" });
    fetch(`https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "messages/load/success",
          payload: json,
        });
      });
  };
};
