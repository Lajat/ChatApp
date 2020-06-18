import React from "react";
import loginImg from "../../login.svg";
import Axios from 'axios';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state={
    username: '',
    password: '',
    isUserLoggedIn: false,
    data: ''
  }

  onUsernameChanged = (e) => {
    this.setState({username: e.target.value});
  }
  onPasswordChanged = (e) => {
    this.setState({password: e.target.value});
  }

  onBtnClicked = () => {
      Axios.get('https://5eebbdf85e298b0016b69414.mockapi.io/signup-login')
      .then(function (response) {
        console.log(response);

        response.data.map(filteredName => {
          if(filteredName.username === 'asd' && filteredName.password === 'asd')
          console.log('true')
        }
        )
      })
  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={this.onUsernameChanged} type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.onPasswordChanged} type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={(status) => this.onBtnClicked(this.state.isUserLoggedIn)} type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}