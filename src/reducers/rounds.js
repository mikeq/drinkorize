import { ORDER_ROUND } from '../actions/actionTypes';

const rounds = (state = [], action) => {
  switch (action.type) {
    case ORDER_ROUND:
      return [...state, action.order];
    default:
      return state;
  }
};

export default rounds;
