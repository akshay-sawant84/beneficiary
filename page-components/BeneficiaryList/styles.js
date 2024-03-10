import styled from 'styled-components';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const FlexHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const Header = styled.div`
	font-size: 30px;
	font-weight: 500;
`;

export const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#000',
		color: '#fff',
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));
