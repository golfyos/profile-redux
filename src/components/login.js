import React, { Component , Fragment } from 'react'
import { connect } from 'react-redux';
import {USER_LOGIN} from '../constant'

const actionUserLogin = data =>{
  return {
    type: USER_LOGIN,
    payload: data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onActionLogin: (data)=>{
      dispatch(actionUserLogin(data))
    }
  }
}

class LoginComponent extends Component {

  state = {
    username : "",
    password : "",
  }

  handleUsername = (e)=>{
    let text = e.target.value
    this.setState({username:text})
  }

  handlePassword = (e)=>{
    let text = e.target.value
    this.setState({password:text})
  }

  handleClick = () => {
    console.log(this.props)
    this.state.id = Math.random() * 2000
    this.props.onActionLogin(this.state)
    this.props.history.push("profile")
  }

  componentDidMount() {
    console.log(this.props)
  }


  render(){
    return(
      <Fragment>
        <div>
          <label>Username: </label>
          <input onChange={this.handleUsername} value={this.state.username} type="text" placeholder="Test123"/>
        </div>
        <div>
          <label>Password: </label>
          <input onChange={this.handlePassword} type="text" placeholder="xxxxxxx"/>
        </div>
        <input onClick={this.handleClick} type="button" value="Login" />

      </Fragment>
    )
  }
}

export default connect(null,mapDispatchToProps)(LoginComponent)