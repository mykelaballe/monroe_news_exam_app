import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, Dimensions, InteractionManager} from 'react-native'
import {Button} from 'react-native-paper'

const SECTION_BTN_WIDTH = (Dimensions.get('window').width / 3 ) - 25

const Scrn = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => {
            setCategories(['World', 'Arts', 'Opinion', 'Science', 'Sports', 'Weather'])
        })
    },[])

    const renderItem = ({item}) => (
        <Button mode='outlined' uppercase={false} onPress={() => {}} style={style.sectionBtn}>
            {item}
        </Button>
    )

    const handleKeyExtractor = (item, index) => index.toString()

    return (
        <>
            <View style={style.sectionContainer}>
                <Text style={style.sectionTitle}>Section</Text>

                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={handleKeyExtractor}
                    numColumns={3}
                />
            </View>
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
        width: SECTION_BTN_WIDTH,
        margin: 5
    }
})

export default Scrn