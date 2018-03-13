import { ADJUST_TIME, RESET_TIME } from "../actions";

export default function(state = 0, action) {
  switch(action.type){
    case(ADJUST_TIME): {
      return state + action.payload;
    }
    case(RESET_TIME): {
      return action.payload;
    }
    default:{
      return state;
    }
  }
}