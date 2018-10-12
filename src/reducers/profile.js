import {EDIT_PROFILE} from '../constant'

const initialState = {
  address: "",
  phone: "",
}

const profile = (state = initialState,action) =>{
  switch(action.type){
    case EDIT_PROFILE:
      return{
        address : action.payload.address,
        phone: action.payload.phone
      }
    
    default: return state;
  }
}

export default profile