import React, { useState } from 'react';
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { removeBeneficiary } from '@/redux/userSlice';
import { FlexHeader, Header, StyledTableCell } from './styles';

function BeneficiaryList() {
	const router = useRouter();
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [selectedId, setSelectedId] = useState();

	const { beneficiaries } = useSelector((state) => state?.user);

	const handleEdit = (id) => {
		router.push(`/beneficiaries/edit/${id}`);
	};

	const handleDeleteModal = (id) => {
		setSelectedId(id);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedId(false);
	};

	const handleDelete = () => {
		dispatch(removeBeneficiary(selectedId));
		setSelectedId();
		setOpen(false);
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
										onClick={() => handleDeleteModal(row.id)}
										style={{ cursor: 'pointer' }}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					Are you sure you want to delete this user?
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleDelete}>Yes</Button>
					<Button onClick={handleClose} autoFocus>
						No
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default BeneficiaryList;
