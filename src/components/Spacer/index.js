import React from 'react'
import {View} from 'react-native'
import {Metrics} from '../../themes'

export default ({h, xl, lg, md, sm, rg, xs}) => {

    let size = 'rg'

    if(xl) size = 'xl'
    else if(lg) size = 'lg'
    else if(md) size = 'md'
    else if(sm) size = 'sm'
    else if(xs) size = 'xs'

    return (
        <View
            style={{
                [`margin${h ? 'Horizontal' : 'Vertical'}`]: Metrics[size]
            }}
        />
    )
}