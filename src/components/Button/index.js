import React from 'react'
import {Button as Btn} from 'react-native-paper'

export default props => <Btn mode='outlined' {...props}>{props.text}</Btn>