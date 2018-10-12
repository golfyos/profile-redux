import React, { Component , Fragment } from 'react'
import "./profile.css"

import {connect} from 'react-redux'
import CardComponent from './card'

const mapStateToProps = state =>{
  console.log(state)
  return {
    username: state.auth.username,
    password: state.auth.password,
    address: state.profile.address,
    phone: state.profile.phone

  }
}

class ProfileComponent extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return(
      <Fragment>
        <label className={"title"}>Your Profile</label>
        <div>username: {this.props.username}</div>
        <div>password: {this.props.password}</div>

        {
          this.props.address && 
          <div>address: {this.props.address}</div>
        }
        {
          this.props.phone && 
          <div>address: {this.props.phone}</div>
        }

        <CardComponent />
      </Fragment>
    )
  }
}

export default connect(mapStateToProps)(ProfileComponent)