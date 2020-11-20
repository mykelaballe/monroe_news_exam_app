import React from 'react'
import Img from 'react-native-image-progress'

export default props => (
    <Img
        indicator={props.loader}
        resizeMode='cover'
        {...props}
    />
)