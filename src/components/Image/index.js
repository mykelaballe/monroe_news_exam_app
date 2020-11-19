import React from 'react'
import ActivityIndicator from '../ActivityIndicator'
import Img from 'react-native-image-progress'

export default props => <Img indicator={ActivityIndicator} {...props} />