import { IReducers } from "./store.types.ts";
import userReducer from "./userSlice";

const reducers: IReducers = {
  user: userReducer,
};

export default reducers;