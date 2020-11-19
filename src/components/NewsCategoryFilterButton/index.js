import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import Button from '../Button'

const WIDTH = (Dimensions.get('window').width / 3 ) - 25

export default ({text}) => {

    const handlePress = () => alert(text)

    return <Button text={text} uppercase={false} onPress={handlePress} style={style.container} />
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: WIDTH,
        margin: 5
    }
})