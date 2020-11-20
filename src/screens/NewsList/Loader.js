import React from 'react'
import {Dimensions} from 'react-native'
import {Colors} from '../../themes'
import ContentLoader, {Rect} from 'react-content-loader/native'

export default () => (
    <ContentLoader
        backgroundColor='#ccc'
        foregroundColor={Colors.light}
        width={Dimensions.get('window').width - 40}
        height={200}
    >
        <Rect x="20" y="9.93" rx="5" ry="5" width="143.55" height="86.59" />
        <Rect x="180" y="9.67" rx="0" ry="0" width="148.72" height="30" />
        <Rect x="180" y="50" rx="0" ry="0" width="89" height="9" />
        <Rect x="180" y="70" rx="0" ry="0" width="89" height="9" />

        <Rect x="20" y="107" rx="5" ry="5" width="143.55" height="86.59" />
        <Rect x="180" y="107" rx="0" ry="0" width="148.72" height="30" />
        <Rect x="180" y="148" rx="0" ry="0" width="89" height="9" />
        <Rect x="180" y="170" rx="0" ry="0" width="89" height="9" />
    </ContentLoader>
)