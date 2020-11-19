import React from 'react'
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native'
import {Button} from 'react-native-paper'

export default ({route, navigation}) => {

    const {title, description, by, published_date, thumbnail} = route.params.news

    const handleBack = () => navigation.pop()

    return (
        <>
            <Image source={{uri: thumbnail}} style={{width:undefined,height:250}} resizeMode='cover' />

            <ScrollView contentContainerStyle={{padding:20}}>
                <Text style={style.title}>{title}</Text>
                <Text>By {by}</Text>
                <Text>Published {published_date}</Text>

                <Text style={style.description}>{description}</Text>
            </ScrollView>

            <View style={{paddingVertical:10,paddingHorizontal:50}}>
                <Button mode='outlined' onPress={handleBack}>Back</Button>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    description: {
        fontWeight: 'bold',
        marginTop: 15
    }
})