export const ADJUST_TIME = "adjust_time";
export const SET_TIME = "set_time";
export const HANDLE_SUCCESSFUL_GUESS = "handle_successful_guess";
export const SKIP_LICENSE_PLATE = "skip_license_plate";

export function adjustTime(changeAmount){
  return {
    type: ADJUST_TIME,
    payload: changeAmount 
  }
}

export function setTime(timeAmount){
  return {
    type: SET_TIME,
    payload: timeAmount
  }
}

export function handleSuccessfulGuess(guess){
  return {
    type: HANDLE_SUCCESSFUL_GUESS,
    payload: guess
  }
}

export default function skipLicensePlate(){
  return 
}