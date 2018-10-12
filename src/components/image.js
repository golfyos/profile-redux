import React , {Component , Fragment} from 'react'

import EditProfile from './edit_profile'

import "./profile.css"

class ImageComponent extends Component {
  render(){
    return(
      <Fragment>
        <div className="image-profile">
          <EditProfile/>
        </div>
      </Fragment>
    )
  }
}


export default ImageComponent