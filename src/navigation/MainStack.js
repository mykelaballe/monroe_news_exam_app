import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Scrn from '../screens'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator>
        <Stack.Screen
            name='NYT News Feed'
            component={Scrn.NewsList}
        />

        <Stack.Screen
            name='News Detail'
            component={Scrn.NewsDetail}
        />
    </Stack.Navigator>
)