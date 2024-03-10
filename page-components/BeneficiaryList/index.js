import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FlexHeader, Header, StyledTableCell } from './styles';
import { removeBeneficiary } from '@/redux/userSlice';

function BeneficiaryList() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { beneficiaries } = useSelector((state) => state?.user);

	const handleEdit = (id) => {
		router.push(`/beneficiaries/edit/${id}`);
	};

	const handleDelete = (id) => {
		dispatch(removeBeneficiary(id));
	};

	return (
		<>
			<FlexHeader>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<ArrowBackIcon
						onClick={() => router.push('/')}
						style={{ marginRight: 20, cursor: 'pointer' }}
					/>
					<Header>Beneficiary Users</Header>
				</div>
				<Button
					onClick={() => router.push('/beneficiaries/add')}
					variant="contained"
				>
					Add Beneficiary
				</Button>
			</FlexHeader>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Name</StyledTableCell>
							<StyledTableCell align="right">Account Number</StyledTableCell>
							<StyledTableCell align="right">Bank Name</StyledTableCell>
							<StyledTableCell align="right">Type of Account</StyledTableCell>
							<StyledTableCell align="right">Actions</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{beneficiaries.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.accountNumber}</TableCell>
								<TableCell align="right">{row.bankName}</TableCell>
								<TableCell align="right">{row.accountType}</TableCell>
								<TableCell align="right">
									<EditIcon
										onClick={() => handleEdit(row.id)}
										style={{ marginRight: 8, cursor: 'pointer' }}
									/>
									<DeleteIcon
										onClick={() => handleDelete(row.id)}
										style={{ cursor: 'pointer' }}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default BeneficiaryList;
