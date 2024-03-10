import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
	beneficiaries: [],
};

const userSlice = createSlice({
	name: 'user',
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
				(b) => b.id === id,
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
				(b) => b.id !== action.payload,
			);
		},
		resetState: (state) => {
			state.user = initialState.user;
			state.beneficiaries = initialState.beneficiaries;
		},
	},
});

export const {
	setUserDetails,
	addBeneficiary,
	editBeneficiary,
	removeBeneficiary,
	resetState,
} = userSlice.actions;

export default userSlice.reducer;
