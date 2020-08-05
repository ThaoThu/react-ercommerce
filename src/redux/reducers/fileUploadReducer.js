import { DOWNLOAD } from '../actions/types';

const INITIAL_STATE = {
    dataScore : []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOWNLOAD:
        return { ...state, dataScore: action.payload };
   
    default:
      return state;
  }
};
