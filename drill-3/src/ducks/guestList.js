const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
}


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {
        guests: [...state.guests, action.payload]
      });
    case REMOVE_GUEST: 
      return Object.assign({}, state, {
        guests: [...state.guests.slice(0, action.payload), ...state.guests.slice(action.payload + 1)]
      });
    default: return state;
  }
}

const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';

export function addGuest(guestName) {
  return {
    type: ADD_GUEST,
    payload: guestName
  }
}

export function removeGuest(index) {
  return {
    type: REMOVE_GUEST,
    payload: index
  }
}
