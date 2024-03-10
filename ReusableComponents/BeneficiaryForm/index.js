/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { controlMapping, controls } from './controls';
import { useForm } from '@/forms';

function BeneficiaryForm({ onSubmit, isEdit, prefillData }) {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		if (isEdit) {
			reset(prefillData);
		}
	}, [prefillData]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Grid container spacing={2}>
				{controls.map((val) => {
					const FormItem = controlMapping[val.controllerType];
					return (
						<Grid item xs={12} md={val.grid || '12'}>
							{' '}
							<FormItem
								style={{ width: '100%' }}
								control={control}
								{...val}
								error={!!errors[val.name]}
								helperText={errors[val.name]?.message}
							/>{' '}
						</Grid>
					);
				})}
			</Grid>
			<div style={{ marginTop: '20px' }}>
				<Button
					style={{ marginRight: '20px' }}
					variant="contained"
					type="submit"
				>
					Submit
				</Button>
				<Button
					onClick={() => router.push('/beneficiaries')}
					variant="outlined"
				>
					Cancel
				</Button>
			</div>
		</form>
	);
}

export default BeneficiaryForm;
