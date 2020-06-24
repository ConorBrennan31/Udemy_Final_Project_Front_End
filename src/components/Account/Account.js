import React from 'react';

const Account = ({ name, emailAddress }) => {
	return (
		<div>
			<div>
				<p>Name</p>
				<p>{name}</p>
			</div>
			<div>
				<p>Email Address</p>
				<p>{emailAddress}</p>
			</div>
		</div>

	);
}

export default Account;