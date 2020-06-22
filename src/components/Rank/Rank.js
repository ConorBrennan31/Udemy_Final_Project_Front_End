import React from 'react';

const Rank = ({ userName, entryCount }) => {
	return (
		<div>
			<div className='white f3'>
				Hi {userName}, your current entry count is...
			</div>
			<div className='white f1'>
				{entryCount}
			</div>
		</div>
	);
}

export default Rank;