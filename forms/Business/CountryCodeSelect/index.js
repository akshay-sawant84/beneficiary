import Select from '@mui/material/Select';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import countries from './countries.json';

import { Container } from './styles';

function SelectCountryCode(props) {
	const { valueKey = 'mobile_country_code' } = props;

	const formattedList = countries.map((code) => ({
		value: code[valueKey],
		label: <Container>{code.mobile_country_code}</Container>,
	}));

	return (
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			{...props}
		>
			{formattedList.map((val) => (
				<MenuItem key={val.val} value={val.value}>
					{val.label}
				</MenuItem>
			))}
		</Select>
	);
}

export default SelectCountryCode;
