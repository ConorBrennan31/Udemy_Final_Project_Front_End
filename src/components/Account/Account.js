import React from 'react';

class Account extends React.Component {

	constructor(props) {
    super(props);
      this.state = {
        signInEmail: '',
        signInPassword: ''
      }
  }

  	render() {
  		const { name, emailAddress } = this.props;
		return (
			<div>
				<h1>Account</h1>
				<div>
					<h3>Name</h3>
					<h5>{name}</h5>
				</div>
				<div>
					<h3>Email Address</h3>
					<h5>{emailAddress}</h5>
				</div>
				<input placeholder="update password"></input>
				<button>update</button>
			</div>

		);
	}
}

export default Account;