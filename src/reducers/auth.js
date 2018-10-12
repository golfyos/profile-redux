import {USER_LOGIN,EDIT_USER_LOGIN} from '../constant'

const initialState = {
  id:"",
  username:"",
  password:"",
  loginState:false,
  data:[]
}

const auth = (state = initialState,action) =>{
  switch(action.type){
    case USER_LOGIN:
      return{
        ...state,
        id:action.payload.id,
        username:action.payload.username,
        password:action.payload.password,
        loginState: true
      }
    case EDIT_USER_LOGIN:
      return{
        ...state,
        username: action.payload.username,
        password: action.payload.password
      }
    
    
    
    default: 
      return state;
  }
}

export default auth