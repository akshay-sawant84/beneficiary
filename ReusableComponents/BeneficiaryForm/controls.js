import { InputController, SelectController } from '@/forms';

export const controls = [
	{
		controllerType: 'input',
		type: 'text',
		name: 'name',
		id: 'outlined-error-helper-text',
		label: 'Name',
		grid: 6,
		variant: 'outlined',
		rules: {
			required: {
				value: true,
				message: 'Name is required',
			},
			pattern: {
				value: /^[a-zA-Z\s]+$/,
			},
		},
	},
	{
		controllerType: 'input',
		type: 'number',
		name: 'accountNumber',
		id: 'outlined-error-helper-text',
		label: 'Account Number',
		grid: 6,
		variant: 'outlined',
		rules: {
			required: {
				value: true,
				message: 'Account Number is required',
			},
		},
	},
	{
		controllerType: 'select',
		type: 'select',
		name: 'bankName',
		label: 'Bank Name',
		id: 'outlined-error-helper-text',
		grid: 6,
		rules: {
			required: {
				value: true,
				message: 'Bank Name is required',
			},
		},
		options: [
			{
				label: 'Axis Bank',
				value: 'Axis Bank',
			},
			{
				label: 'HDFC Bank',
				value: 'HDFC Bank',
			},
			{
				label: 'Kotak Bank',
				value: 'Kotak Bank',
			},
			{
				label: 'RBL Bank',
				value: 'RBL Bank',
			},
			{
				label: 'Yes Bank',
				value: 'Yes Bank',
			},
		],
	},
	{
		controllerType: 'select',
		type: 'select',
		name: 'accountType',
		label: 'Account Type',
		id: 'outlined-error-helper-text',
		grid: 6,
		rules: {
			required: {
				value: true,
				message: 'Account Type is required',
			},
		},
		options: [
			{
				label: 'Savings Account',
				value: 'Savings Account',
			},
			{
				label: 'Current Account',
				value: 'Current Account',
			},
		],
	},
];

export const controlMapping = {
	input: InputController,
	select: SelectController,
};
