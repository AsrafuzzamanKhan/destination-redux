import { REMOVE_DATA, SET_DATA } from "./actionType";

const initialState = {
  formData: [],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    case REMOVE_DATA:
      return {
        ...state,
        formData: state.formData.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
export default dataReducer;
