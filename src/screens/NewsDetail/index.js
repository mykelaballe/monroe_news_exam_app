import React from 'react'
import {ScrollView, StyleSheet, Dimensions} from 'react-native'
import {Image, Button, Text, Footer} from '../../components'
import {Colors, Metrics} from '../../themes'
import {formatDateTimeAgo} from '../../utils'
import ContentLoader, {Rect} from 'react-content-loader/native'

const IMAGE_WIDTH = Dimensions.get('window').width
const IMAGE_HEIGHT = 250

const Loader = () => (
    <ContentLoader backgroundColor={Colors.light} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}>
        <Rect x="0" y="0" rx="0" ry="0" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
    </ContentLoader>
)

export default ({route, navigation}) => {

    const {title, abstract, byline, published_date, multimedia} = route.params.news

    const handleBack = () => navigation.pop()

    return (
        <>
            {multimedia && <Image source={{uri: multimedia[0].url}} style={style.img} loader={Loader} />}

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
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT
    }
})