// movies store
import { createStore, applyMiddleware } from "redux";
import moviesReducer from "../reducers/moviesReducer";
import thunk from "redux-thunk";

export const moviesStore = createStore(moviesReducer, applyMiddleware(thunk));
