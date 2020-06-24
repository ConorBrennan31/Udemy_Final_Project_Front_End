import React from 'react';

class Account extends React.Component {

	constructor(props) {
    super(props);
      this.state = {
        updatedPassword: ''
      }
  }

  	onPasswordChange = (event) => {
		this.setState({updatedPassword: event.target.value});
	}

	onPasswordChangeSubmit = () => {
		fetch('https://murmuring-crag-47327.herokuapp.com/profile', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: emailAddress,
				updatedPassword: this.state.updatedPassword 
			})
		})
		.then(response => response.json())
		.then(user => {
			console.log(user)
		})
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
				<input placeholder="update password" onChange={this.onPasswordChange} type="password"></input>
				<button>update</button>
			</div>

		);
	}
}

export default Account;