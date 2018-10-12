import React , {Component, Fragment} from 'react'

import { connect } from 'react-redux'

import ImageComponent from './image'

import "./profile.css"

class CardComponent extends Component {
  render(){
    return (
      <Fragment>
        <div className="card">
        <ImageComponent />
        </div>
      </Fragment>
    )
  }
}

export default CardComponent