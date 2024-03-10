import Input from '@mui/material/TextField';
import React from 'react';
import { Controller } from 'react-hook-form';

function InputController(props) {
	const { name, control, value, rules, ...rest } = props;

	return (
		<Controller
			key={name}
			control={control}
			name={name}
			defaultValue={value}
			rules={rules}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<Input
					{...rest}
					id={name}
					key={rest.id}
					value={newValue || ''}
					onChange={(event) => {
						onChange(event);
						rest.onChange?.(event);
					}}
					onBlur={(event) => {
						onBlur(event);
						rest.onBlur?.(event);
					}}
				/>
			)}
		/>
	);
}
export default InputController;
