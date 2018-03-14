import { makeQueue } from '../oldLPG/main';
import { HANDLE_SUCCESSFUL_GUESS } from '../actions';

const defaultLicensePlates = {
  currentLicensePlate: makeQueue(1)[0],
  queue: makeQueue(25),
  history: []
};

export default function (state = defaultLicensePlates, action) {
  switch (action.type){
    case (HANDLE_SUCCESSFUL_GUESS): {
      //move guess to history
      //TODO: group together guesses on same letters
      let newHistory = [...state.history, action.payload];
      
      //take first element from queue as currentlicenseplate
      let newLicensePlate = state.queue[0] || null;

      //remove first element (our new current license plate) from queue 
      let newQueue = state.queue.slice(1);

      return {
        currentLicensePlate: newLicensePlate,
        queue: newQueue,
        history: newHistory
      }   
    }
    default: {
      return state;
    }
  }
}