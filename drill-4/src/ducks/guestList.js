const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const UPDATE_GUEST = 'UPDATE_GUEST';

const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
};

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}

export function updateGuest(i, guest) {
  return {
    type: UPDATE_GUEST,
    payload: {index: i, name: guest}
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {guests: [...state.guests, action.payload]});
    case REMOVE_GUEST:
      return Object.assign({}, state, {guests: state.guests.filter((guest, i) => i !== action.payload)});
    case UPDATE_GUEST:
      return Object.assign({}, state, {
        guests: [...state.guests.slice(0, action.payload.index), action.payload.name, ...state.guests.slice(action.payload.index + 1)]
      });
    default:
      return state;
    }
}
