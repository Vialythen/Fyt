import { ONBOARD_STATE } from "../config/settings";

const initialState = ONBOARD_STATE;

export default function onboardReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        authenticated: action.payload.authenticated
      };

    case "LOG_IN":
      // Add Persistant Floating User Icon
      return state;

    default:
      return state;
  }
}

console.log(onboardReducer());
