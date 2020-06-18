import React from "react";
import loginImg from "../../login.svg";
import Axios from 'axios';

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: '',
    email: '',
    password: ''
  }

  onUsernameChanged = (e) => {
    this.setState({username: e.target.value});
  }
  onEmailChanged = (e) => {
    this.setState({email: e.target.value});
  }
  onPasswordChanged = (e) => {
    this.setState({password: e.target.value});
  }
  onBtnClicked = () => {
    console.log("Button Clicked");
    Axios.post('https://5eebbdf85e298b0016b69414.mockapi.io/signup-login', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    this.setState({username: '',email: '',password : ''});
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={this.onUsernameChanged} type="text" name="username" value={this.state.username} placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={this.onEmailChanged} type="text" name="email" value={this.state.email} placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.onPasswordChanged} type="text" name="password" value={this.state.password} placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.onBtnClicked} type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}