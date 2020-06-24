import { createStore } from "redux";
import resultReducer from "./reducers";
export const store = createStore(resultReducer);
