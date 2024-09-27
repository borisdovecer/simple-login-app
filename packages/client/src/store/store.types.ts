import { Reducer } from "@reduxjs/toolkit";

export type IUserState = {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  token: string | null;
}

export interface IReducers {
  user: Reducer<IUserState>,
}