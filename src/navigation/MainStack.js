import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Scrn from 'screens'
import {NEWS_LIST, NEWS_DETAIL} from 'consts/Routes'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator>
        <Stack.Screen
            name={NEWS_LIST}
            component={Scrn.NewsList}
        />

        <Stack.Screen
            name={NEWS_DETAIL}
            component={Scrn.NewsDetail}
            options={({route}) => ({
                title: route.params.news.title
            })}
        />
    </Stack.Navigator>
)