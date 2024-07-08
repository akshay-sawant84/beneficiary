import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  beneficiaries: [],
  screenMode: "dark",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
    },
    addBeneficiary: (state, action) => {
      state.beneficiaries.push(action.payload);
    },
    editBeneficiary: (state, action) => {
      const { id } = action.payload;
      const beneficiaryIndex = state.beneficiaries.findIndex(
        (b) => b.id === id
      );
      if (beneficiaryIndex !== -1) {
        state.beneficiaries[beneficiaryIndex] = {
          ...state.beneficiaries[beneficiaryIndex],
          ...action.payload,
        };
      }
    },
    removeBeneficiary: (state, action) => {
      state.beneficiaries = state.beneficiaries.filter(
        (b) => b.id !== action.payload
      );
    },
    resetState: (state) => {
      state.user = initialState.user;
      state.beneficiaries = initialState.beneficiaries;
    },
    setScreenMode: (state, action) => {
      state.screenMode = action.payload;
    },
  },
});

export const {
  setUserDetails,
  addBeneficiary,
  editBeneficiary,
  removeBeneficiary,
  resetState,
  setScreenMode,
} = userSlice.actions;

export default userSlice.reducer;
