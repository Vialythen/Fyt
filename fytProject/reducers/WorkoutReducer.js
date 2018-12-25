import {EDIT_SET, CHANGE_SET_COMPLETION_STATUS, INITIAL_STATE} from '../config/settings';

const initialState = INITIAL_STATE;
export default function workoutReducer(state=initialState, action){
   switch(action.type){
     case EDIT_SET:
      return {
        ...state,
        workout: {
        ...state.workout,
        [action.payload.exercise] : {
          ...state.workout[action.payload.exercise],
          [action.payload.setNumber]:{
            reps: action.payload.reps,
            weight: action.payload.weight
          }

        }
      }
      }
     case CHANGE_SET_COMPLETION_STATUS:
     return {
       ...state,
       workout: {
         ...state.workout,
         [action.payload.exercise] : {
           ...state.workout[action.payload.exercise],
           [action.payload.setNumber]:{
             ...state.workout[action.payload.exercise][action.payload.setNumber],
             completed: ! state.workout[action.payload.exercise][action.payload.setNumber].completed
           }
         }
       }
     }


     default:
        return state;
   }

}