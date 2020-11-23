import React, {useState, useEffect} from 'react'
import {View, StyleSheet, InteractionManager} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {NewsCategoryFilterButton, NewsItem, Text, FlatList, Row, Spacer} from 'components'
import {Colors, Metrics} from 'themes'
import {connect} from 'react-redux'
import Actions from 'store/actions'
import Loader from './Loader'
import {TextInput, TouchableRipple} from 'react-native-paper'

const Scrn = ({attempting, list, listHolder, location, attemptGetList, setList}) => {

    const [categories, setCategories] = useState([])
    const [locations, setLocations] = useState([])
    const [keyword, setKeyword] = useState('')
    const [showKeyword, setShowKeyword] = useState(false)

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

    const handleChangeKeyword = text => {
        setKeyword(text)
        setList(listHolder.filter(l => (l.title.toLowerCase().indexOf(text.toLowerCase()) >= 0 || l.abstract.toLowerCase().indexOf(text.toLowerCase())) >= 0 ))
    }

    const handleToggleKeyword = () => setShowKeyword(prevShowKeyword => !prevShowKeyword)

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
                
                <TouchableRipple onPress={handleToggleKeyword} style={style.keywordBtn}>
                    <Text style={{fontSize:16}}>Keywords</Text>
                </TouchableRipple>
            </Row>

            {showKeyword &&
            <TextInput
                placeholder='Enter keyword here...'
                value={keyword}
                onChangeText={handleChangeKeyword}
                autoCapitalize='none'
            />
            }

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
    },
    keywordBtn: {
        flex:1,
        backgroundColor:Colors.light,
        alignItems:'center',
        justifyContent:'center',
        padding:Metrics.rg
    }
})

const mapStateToProps = ({news}) => ({
    attempting: news.attempting,
    list: news.list,
    listHolder: news.listHolder,
    location: news.location
})

const mapDispatchToProps = dispatch => ({
    attemptGetList: payload => dispatch(Actions.Creators.attemptGetNewsList(payload)),
    setList: list => dispatch(Actions.Creators.setNewsList(list))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)