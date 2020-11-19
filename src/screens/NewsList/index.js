import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, Dimensions, InteractionManager, Image} from 'react-native'
import {Button, Surface, TouchableRipple} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker'

const SECTION_BTN_WIDTH = (Dimensions.get('window').width / 3 ) - 25

const Scrn = () => {

    const [categories, setCategories] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setCategories(['World', 'Arts', 'Opinion', 'Science', 'Sports', 'Weather'])

            setNews([
                {
                    id:1,
                    title:'Duterte ’not plastic,’ ‘consistent’ on remarks vs Robredo — Palace',
                    by:'Rick Sanchez',
                    published_date: '10 minutes ago',
                    thumbnail:'https://d2kf8ptlxcina8.cloudfront.net/XBXFQOBDKM-preview.png'
                },
                {
                    id:2,
                    title:'EO for emergency use of COVID-19 vaccines in PH ‘approved in principle’',
                    by:'Tricia Takanawa',
                    published_date: '2 days ago',
                    thumbnail:'https://image.shutterstock.com/image-vector/breaking-news-concept-design-template-260nw-1012866391.jpg'
                },
                {
                    id:3,
                    title:'House panel OKs bill seeking to modernize BI',
                    by:'Tom Tucker',
                    published_date: 'a week ago',
                    thumbnail:'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SKD-bqAkQjhvrjayf/videoblocks-news-intro-graphic-animation-with-circles-and-world-map-abstract-background-elegant-and-luxury-dynamic-style-for-news-and-business-template_bzal6tytb_thumbnail-180_01.jpg'
                },
                {
                    id:4,
                    title:'Duterte ’not plastic,’ ‘consistent’ on remarks vs Robredo — Palace',
                    by:'Rick Sanchez',
                    published_date: '10 minutes ago',
                    thumbnail:'https://d2kf8ptlxcina8.cloudfront.net/XBXFQOBDKM-preview.png'
                },
                {
                    id:5,
                    title:'EO for emergency use of COVID-19 vaccines in PH ‘approved in principle’',
                    by:'Tricia Takanawa',
                    published_date: '2 days ago',
                    thumbnail:'https://image.shutterstock.com/image-vector/breaking-news-concept-design-template-260nw-1012866391.jpg'
                },
                {
                    id:6,
                    title:'House panel OKs bill seeking to modernize BI',
                    by:'Tom Tucker',
                    published_date: 'a week ago',
                    thumbnail:'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/SKD-bqAkQjhvrjayf/videoblocks-news-intro-graphic-animation-with-circles-and-world-map-abstract-background-elegant-and-luxury-dynamic-style-for-news-and-business-template_bzal6tytb_thumbnail-180_01.jpg'
                }
            ])
        })
    },[])

    const renderCategory = ({item}) => (
        <Button mode='outlined' uppercase={false} onPress={() => {}} style={style.sectionBtn}>
            {item}
        </Button>
    )

    const handleCategoryKeyExtractor = (item, index) => index.toString()

    const renderNews = ({item}) => (
        <Surface style={style.newsItemOuterContainer}>
            <TouchableRipple onPress={() => {}} style={style.newsItemInnerContainer}>
                <View style={{flexDirection: 'row'}}>

                    <Image source={{uri: item.thumbnail}} style={{width:110,height:110,marginRight:15}} resizeMode='cover' />

                    <View style={{flex:1}}>
                        <Text style={style.newsItemTitle} numberOfLines={3}>{item.title}</Text>
                        <Text style={style.newsItemSubtext}>By: {item.by}</Text>
                        <Text style={style.newsItemSubtext}>Published: {item.published_date}</Text>
                    </View>
                </View>
            </TouchableRipple>
        </Surface>
        
    )

    const handleNewsKeyExtractor = item => item.id.toString()

    return (
        <>
            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>Section</Text>

                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={handleCategoryKeyExtractor}
                    numColumns={3}
                />
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
                <Picker style={{flex:1,backgroundColor:'#fff',borderRadius:5}}>
                    <Picker.Item label="Location" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                </Picker>
                <View style={{marginHorizontal:5}} />
                <Picker style={{flex:1,backgroundColor:'#fff',borderRadius:5}}>
                    <Picker.Item label="Keywords" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                </Picker>
            </View>

            <FlatList
                data={news}
                renderItem={renderNews}
                keyExtractor={handleNewsKeyExtractor}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{marginHorizontal:20}}
            />
        </>

    )
}

const style = StyleSheet.create({
    sectionContainer: {
        padding: 20
    },
    sectionTitle: {
        fontWeight: 'bold'
    },
    sectionBtn: {
        backgroundColor: '#fff',
        width: SECTION_BTN_WIDTH,
        margin: 5
    },
    newsItemOuterContainer: {
        marginVertical: 5,
        elevation: 2
    },
    newsItemInnerContainer: {
        padding: 15
    },
    newsItemTitle: {
        flex:1,
        fontWeight: 'bold',
        fontSize: 16
    },
    newsItemSubtext: {
        fontSize: 12
    }
})

export default Scrn