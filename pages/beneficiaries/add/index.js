import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import AddEditBeneficiary from '@/page-components/AddEditBeneficiary';
import isEmpty from '@/utils/isEmpty';

function AddBeneficiary() {
	const router = useRouter();
	const { user } = useSelector((state) => state?.user);

	if (isEmpty(user)) {
		router.push('/');
	}

	return <AddEditBeneficiary />;
}

export default AddBeneficiary;
