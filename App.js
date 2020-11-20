import React, {useEffect} from 'react'
import Navigation from './src/navigation'
import NetInfo from '@react-native-community/netinfo'
import {connect} from 'react-redux'
import Actions from './src/store/actions'

const App = ({setIsNetworkConnected}) => {

  useEffect(() => {
    NetInfo.fetch().then(state => setIsNetworkConnected(state.isConnected))

    const netInfoUnsubscribe = NetInfo.addEventListener(state => {
      setIsNetworkConnected(state.isConnected)
    })

    return () => {
      netInfoUnsubscribe()
    }
  },[])

  return <Navigation />
}

const mapDispatchToProps = dispatch => ({
  setIsNetworkConnected: isConnected => dispatch(Actions.Creators.setIsNetworkConnected(isConnected))
})

export default connect(null, mapDispatchToProps)(App)