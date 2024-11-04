import {createStore, persist} from "easy-peasy";
import order from "./model";

const store = createStore(persist(order));

export default store;