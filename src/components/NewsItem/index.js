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
import {formatDateTimeAgo} from '../../utils'
import ContentLoader, {Rect} from 'react-content-loader/native'

const Loader = () => (
    <ContentLoader width={110} height={110}>
        <Rect x="0" y="0" rx="0" ry="0" width="110" height="110" />
    </ContentLoader>
)

export default ({data}) => {

    const navigation = useNavigation()

    const handlePress = () => navigation.navigate(NEWS_DETAIL, {news: data})

    return (
        <Surface style={style.outerContainer}>
            <TouchableRipple onPress={handlePress} style={style.innerContainer}>
                <Row>

                    {data.multimedia &&
                    <Image
                        source={{uri: data.multimedia[0].url}}
                        style={style.thumbnail}
                        loader={Loader}
                    />
                    }

                    <Spacer h sm />

                    <View style={{flex: 1}}>
                        <Text b style={style.title} numberOfLines={3}>{data.title}</Text>
                        <Text style={style.subtext} numberOfLines={1}>{data.byline}</Text>
                        <Text style={style.subtext}>Published: {formatDateTimeAgo(data.published_date)}</Text>
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