import React from 'react'
import {FlatList as List} from 'react-native'

export default props => {

    const handleKeyExtractor = (item, index) => (item.id || index).toString()

    return (
        <List
            keyExtractor={handleKeyExtractor}
            showsVerticalScrollIndicator={false}
            {...props}
        />
    )
}