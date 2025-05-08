import { createSlice } from '@reduxjs/toolkit';

import { initialSettingState } from '../types/setting.type';

const settingSlice = createSlice({
  name: 'settings',
  initialState: initialSettingState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = settingSlice.actions;
export default settingSlice.reducer;
