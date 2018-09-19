import { HANDLE_COUNT } from 'Constants';

export const getCount = (count) =>
  dispatch => dispatch({
    type: HANDLE_COUNT,
    payload: {
      count: count
    }
  })
