import { REMOVE_DATA, SET_DATA } from "./actionType";

export const setData = (formData) => {
  return {
    type: SET_DATA,
    payload: formData,
  };
};
export const removeData = (index) => {
  return {
    type: REMOVE_DATA,
    payload: index,
  };
};
