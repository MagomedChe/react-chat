const scrollChatDown = () => {
  const chatWindow = document.getElementById('lastMessages');
  if (chatWindow) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
};
const initialState = {
  messages: [],
  loading: false,
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'messages/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'messages/load/success':
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };

    case 'messages/send/start':
      return {
        ...state,
        loading: true,
      };

    case 'messages/send/success':
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};

export const loadMessages = (myId, contactId) => {
  return (dispatch) => {
    dispatch({ type: 'messages/load/start' });
    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'messages/load/success',
          payload: json,
        });
        scrollChatDown();
      });
  };
};
export const addMessage = (myId, contactId, write ) => {
  return (dispatch) => {
    dispatch({ type: 'messages/send/start'});
    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      body: JSON.stringify({
        myId: myId,
        contactId: contactId,
        content: write,
        type: 'text',

      }),
      headers: {
        'Content-type': 'application/json; chatset=UTF-8',
      },
    }).then(() => {
      dispatch({
        type: 'messages/send/success',
        payload: {
          myId: myId,
          contactId: contactId,
          content: write,
          type: 'text',
        },
      });
      scrollChatDown();
    });
  };
};
