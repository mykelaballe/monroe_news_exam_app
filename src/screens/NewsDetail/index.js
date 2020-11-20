import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {Image, Button, Text, Footer} from '../../components'
import {Metrics} from '../../themes'
import {formatDateTimeAgo} from '../../utils'

export default ({route, navigation}) => {

    const {title, abstract, byline, published_date, multimedia} = route.params.news

    const handleBack = () => navigation.pop()

    return (
        <>
            {multimedia && <Image source={{uri: multimedia[0].url}} style={style.img} resizeMode='cover' />}

            <ScrollView contentContainerStyle={{padding: Metrics.lg}}>
                <Text b style={style.title}>{title}</Text>
                <Text>{byline}</Text>
                <Text>Published {formatDateTimeAgo(published_date)}</Text>

                <Text b style={style.description}>{abstract}</Text>
            </ScrollView>

            <Footer>
                <Button text='Back' onPress={handleBack} />
            </Footer>
        </>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        marginBottom: Metrics.rg
    },
    description: {
        marginTop: Metrics.md
    },
    img: {
        width: undefined,
        height: 250
    }
})