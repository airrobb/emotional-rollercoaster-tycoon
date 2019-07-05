import { createStore, combineReducers } from "redux";
// Redux
import { gameReducer } from "./redux/game";

const store = createStore(combineReducers({ game: gameReducer }));

export default store;
