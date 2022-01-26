//Скрол к концу сообщения
const scrollChatDown = () => {
  const chatWindow = document.getElementById('lastMessages');
  if (chatWindow) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
};
const initialState = {
  messages: [],
  loading: false,
  sending: false,
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

    case 'message/delete/start':
      return {
        ...state,
        loading: true,
      };

    case 'message/delete/success':
      return {
        ...state,
        messages: state.messages.filter((message) => {
          if (message._id !== action.payload) {
            return true;
          }
          return false;
        }),
      };

    case 'messages/send/start':
      return {
        ...state,
        loading: true,
        messages: [...state.messages, action.payload, ],
        sending:true
      //     [
      //     ...state.messages,{
      //     ...action.payload,
      //
      //   }]
      };

    case 'messages/send/success':
      return {
        ...state,
        loading: false,
        sending: false,
        messages: state.messages.map(messsage => {
          if (messsage._id === action.payload.tempId) {
            return {
              ...action.payload,
            }
          }
          return messsage
        }),

      };

    default:
      return state;
  }
};
//Загрузка сообщений
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
//Добавление сообщений
export const addMessage = (myId, contactId, write) => {
  const tempId = Math.random();
  return (dispatch) => {
    dispatch({
      type: 'messages/send/start',
      payload: {
        tempId: tempId,
        myId: myId,
        contactId: contactId,
        content: write,}
    });
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
          tempId: tempId
        },
      });
      scrollChatDown();
    });
  };
};


//Удаление сообщений
export const deleteMessage = (id) => {
  return (dispatch) => {
    dispatch({ type: '/message/deletestart' });
    fetch(`https://api.intocode.ru:8001/api/messages/${id}`, {
      method: 'DELETE',
    }).then(() => {
      dispatch({
        type: 'message/delete/success',
        payload: id,
      });
    });
  };
};
