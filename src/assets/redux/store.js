import { legacy_createStore as createStore } from "redux";
import dataReducer from "./counter/dataReducer";

const store = createStore(dataReducer);
export default store;
