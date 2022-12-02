import { translations } from "../../components/helpers/translations";

export function appReducer(state, action) {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        theme:action.payload
      };
    case "LANGUAGE":
      return {
        ...state,
        language: action.payload,
        texts: translations[action.payload]
      };
    default:
      return state;
  }
}
