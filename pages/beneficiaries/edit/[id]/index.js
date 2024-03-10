import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import AddEditBeneficiary from '@/page-components/AddEditBeneficiary';

function EditBeneficiary() {
	const router = useRouter();

	const beneficiary = useSelector((state) =>
		state?.user?.beneficiaries.find(
			(val) => val.id === Number(router.query?.id),
		),
	);

	if (!beneficiary) return <div>Beneficiary not found</div>;

	return <AddEditBeneficiary isEdit prefillData={beneficiary} />;
}

export default EditBeneficiary;
