import { combineReducers } from '@reduxjs/toolkit';

import settingSlice from './slices/setting.slice';

const appReducers = {
  settings: settingSlice,
};

const reducer = appReducers;
const rootReducer = combineReducers(reducer);
export default rootReducer;
