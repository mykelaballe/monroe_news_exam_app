 import Actions from '../actions'
 import {createReducer} from 'reduxsauce'
 import Immutable from 'seamless-immutable'

 const INITIAL_STATE = Immutable({
    isConnected: false
 })
 
 const doSetIsNetworkConnected = (state, {isConnected}) => state.merge({isConnected})

 const HANDLERS = {
     [Actions.Types.SET_IS_NETWORK_CONNECTED]: doSetIsNetworkConnected
 }

 export default createReducer(INITIAL_STATE, HANDLERS)