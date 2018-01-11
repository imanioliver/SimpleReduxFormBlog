import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      console.log(action.payload);
    // case CREATE_POST:
    //   return _.mapKeys(action.payload.data, 'id');
    //   console.log(action.payload);

    default:
      return state;
  }
}
