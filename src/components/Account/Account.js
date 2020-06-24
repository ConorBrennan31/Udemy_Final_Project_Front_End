import React from 'react';

const Account = ({ name, emailAddress }) => {
	return (
		<div>
			<p>Name</p>
			<p>{name}</p>
		</div>
		<div>
			<p>Email Address</p>
			<p>{emailAddress}</p>
		</div>

	);
}

export default Account;