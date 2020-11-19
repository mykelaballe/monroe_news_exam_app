import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {Image, Button, Text, Footer} from '../../components'
import {Metrics} from '../../themes'

export default ({route, navigation}) => {

    const {title, description, by, published_date, thumbnail} = route.params.news

    const handleBack = () => navigation.pop()

    return (
        <>
            <Image source={{uri: thumbnail}} style={style.img} resizeMode='cover' />

            <ScrollView contentContainerStyle={{padding: Metrics.lg}}>
                <Text b style={style.title}>{title}</Text>
                <Text>By {by}</Text>
                <Text>Published {published_date}</Text>

                <Text b style={style.description}>{description}</Text>
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