import { ORDER_ROUND } from './actionTypes';
import shortid from 'shortid';

export const orderRound = drinks => {
  return {
    type: ORDER_ROUND,
    order: {
      id: shortid.generate(),
      drinks
    }
  };
};
