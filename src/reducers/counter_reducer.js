import { HANDLE_COUNT } from 'Constants';

export default (state = {}, action) => {
  switch(action.type) {
    case HANDLE_COUNT:
      return { ...state, count: ++action.payload.count };
    default:
      return state;
  }
}