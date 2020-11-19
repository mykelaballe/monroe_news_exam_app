import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Metrics} from '../../themes'
import Text from '../Text'
import Image from '../Image'
import Row from '../Row'
import Spacer from '../Spacer'
import {Surface, TouchableRipple} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import {NEWS_DETAIL} from '../../consts/Routes'

export default ({data}) => {

    const navigation = useNavigation()

    const handlePress = () => navigation.navigate(NEWS_DETAIL, {news: data})

    return (
        <Surface style={style.outerContainer}>
            <TouchableRipple onPress={handlePress} style={style.innerContainer}>
                <Row>

                    <Image source={{uri: data.thumbnail}} style={style.thumbnail} resizeMode='cover' />

                    <Spacer h sm />

                    <View style={{flex: 1}}>
                        <Text b style={style.title} numberOfLines={3}>{data.title}</Text>
                        <Text style={style.subtext}>By: {data.by}</Text>
                        <Text style={style.subtext}>Published: {data.published_date}</Text>
                    </View>
                </Row>
            </TouchableRipple>
        </Surface>
    )
}

const style = StyleSheet.create({
    outerContainer: {
        marginVertical: Metrics.sm,
        elevation: 2
    },
    innerContainer: {
        padding: Metrics.md
    },
    title: {
        flex: 1,
        fontSize: 16
    },
    subtext: {
        fontSize: 12
    },
    thumbnail: {
        width: 110,
        height: 110
    }
})