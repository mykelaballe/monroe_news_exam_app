import React from 'react'
import {Text as Txt} from 'react-native'

export default props => (
    <Txt
        {...props}
        style={[
            {
                fontWeight: props.b ? 'bold' : 'normal'
            },
            props.style
        ]}
    >
        {props.children}
    </Txt>
)