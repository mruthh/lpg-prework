export const ADJUST_TIME = "adjust_time";
export const RESET_TIME = "reset_time"

export function adjustTime(changeAmount){
  return {
    type: ADJUST_TIME,
    payload: changeAmount 
  }
}


export function resetTime(initialTimeAmount){
  return {
    type: RESET_TIME,
    payload: initialTimeAmount
  }
}