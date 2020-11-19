import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Scrn from '../screens'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator>
        <Stack.Screen
            name='NewsFeed'
            component={Scrn.NewsList}
        />

        <Stack.Screen
            name='NewsDetail'
            component={Scrn.NewsDetail}
            options={({route}) => ({
                title: route.params.news.title
            })}
        />
    </Stack.Navigator>
)