import React, {useState, useEffect} from 'react'
import {View, StyleSheet, InteractionManager} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {NewsCategoryFilterButton, NewsItem, Text, FlatList, Row, Spacer, ActivityIndicator} from '../../components'
import {Colors, Metrics} from '../../themes'
import {connect} from 'react-redux'
import Actions from '../../store/actions'
import Loader from './Loader'

const Scrn = ({attempting, list, location, attemptGetList}) => {

    const [categories, setCategories] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setCategories([
                {label: 'Arts', value: 'arts'},
                {label: 'Business', value: 'business'},
                {label: 'Food', value: 'food'},
                {label: 'Health', value: 'health'},
                {label: 'Politics', value: 'politics'},
                {label: 'World', value: 'world'},
            ])

            setLocations(['Australia' ,'Afghanistan', 'Canada', 'Ecuador', 'Israel', 'Mexico', 'Thailand', 'United States', 'Venezuela'])

            attemptGetList()
        })
    },[])

    const handleChangeLocation = value => attemptGetList({location: value})

    const renderCategory = ({item, index}) => <NewsCategoryFilterButton index={index} data={item} />

    const renderNews = ({item, index}) => <NewsItem index={index} data={item} />

    return (
        <>
            <View style={style.sectionContainer}>
                <Text b>Section</Text>

                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    numColumns={3}
                />
            </View>

            <Row style={style.listContainer}>
                <Picker style={style.picker} selectedValue={location} onValueChange={handleChangeLocation}>
                    <Picker.Item label='Location' value='' />
                    {locations.map((loc, index) => <Picker.Item key={index} label={loc} value={loc} />)}
                </Picker>
                
                <Spacer />
                
                <Picker style={style.picker}>
                    <Picker.Item label="Keywords" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                </Picker>
            </Row>

            {attempting && <Loader />}

            {!attempting &&
            <FlatList
                data={list}
                renderItem={renderNews}
                contentContainerStyle={{marginHorizontal:20}}
            />
            }
        </>

    )
}

const style = StyleSheet.create({
    sectionContainer: {
        padding: Metrics.lg
    },
    listContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: Metrics.lg
    },
    picker: {
        flex: 1,
        backgroundColor: Colors.light,
        borderRadius: Metrics.sm
    }
})

const mapStateToProps = ({news}) => ({
    attempting: news.attempting,
    list: news.list,
    location: news.location
})

const mapDispatchToProps = dispatch => ({
    attemptGetList: payload => dispatch(Actions.Creators.attemptGetNewsList(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)