import React, {Fragment, Component} from 'react'

import {connect} from 'react-redux'

import {EDIT_PROFILE,EDIT_USER_LOGIN} from '../constant'



const mapStateToProps = state=>{
  return{
    username : state.auth.username,
    password: state.auth.password,
    address: state.profile.address,
    phone: state.profile.address
  }
}

const actionEditProfile = data =>{
  return {
    type:EDIT_PROFILE,
    payload: data
  }
}
const actionEditProfile2 = data =>{
  return {
    type:EDIT_USER_LOGIN,
    payload: data
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    onEditProfile: data =>{
      dispatch(actionEditProfile(data))
    },
    onEditProfile2: data =>{
      dispatch(actionEditProfile2(data))
    },
  }
}


class EditComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      address: "",
      phone: "" 
    }
  }

  _saveProfile = () =>{
    const {username,password,address,phone} = this.state

    this.props.onEditProfile2({username,password})
    this.props.onEditProfile({address,phone})
  }
  
  render(){
    return(
      <Fragment>
        <div>
          
          <div>username: <input onChange={(e)=>this.setState({username:e.target.value})} type="text" value={this.state.username} /></div>
          <div>password: <input onChange={(e)=>this.setState({password:e.target.value})} type="text" value={this.state.password} /></div>

          <div>address:<input onChange={(e)=>this.setState({address:e.target.value})} type="text" value={this.state.address} /></div>
          <div>phone:<input onChange={(e)=>this.setState({phone:e.target.value})} type="text" value={this.state.phone} /></div>

          <button onClick={this._saveProfile}>Save</button>
        </div>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditComponent)