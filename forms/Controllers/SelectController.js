import Select from '@mui/material/Select';
import React from 'react';
import { Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

function SelectController(props) {
	const { name, control, value, rules, options = [], ...rest } = props;

	return (
		<Controller
			key={name}
			control={control}
			name={name}
			defaultValue={value}
			rules={rules}
			render={({ field: { onChange, onBlur, value: newValue } }) => (
				<FormControl fullWidth error={rest?.error}>
					<InputLabel id="demo-simple-select-label">{rest.label}</InputLabel>
					<Select
						{...rest}
						id={name}
						key={rest.id}
						label={rest.label}
						value={newValue || ''}
						onChange={(event) => {
							onChange(event);
							rest.onChange?.(event);
						}}
						onBlur={(event) => {
							onBlur(event);
							rest.onBlur?.(event);
						}}
					>
						{options.map((val) => (
							<MenuItem key={val.value} value={val.value}>
								{val.label}
							</MenuItem>
						))}
					</Select>
					{rest?.error && <FormHelperText>{rest?.helperText}</FormHelperText>}
				</FormControl>
			)}
		/>
	);
}
export default SelectController;
