# About
News app the pulls data from New York Times API

# React / React Native Version
React: 16.3.1  
React Native: 0.63.3

# Libraries
* [Async Storage](https://github.com/react-native-async-storage/async-storage)
* [Masked View](https://www.npmjs.com/package/@react-native-community/masked-view)
* [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo)
* [Picker](https://github.com/react-native-picker/picker)
* [Core Navigation](https://www.npmjs.com/package/@react-navigation/native)
* [Stack Navigation](https://www.npmjs.com/package/@react-navigation/stack)
* [Axios](https://github.com/axios/axios)
* [Moment](https://github.com/moment/moment)
* [Content Loader](https://github.com/danilowoz/react-content-loader)
* [Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)
* [Image Progress](https://github.com/oblador/react-native-image-progress)
* [Paper](https://github.com/callstack/react-native-paper)
* [Reanimated](https://github.com/software-mansion/react-native-reanimated)
* [Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
* [Screens](https://github.com/software-mansion/react-native-screens)
* [SVG](https://github.com/react-native-svg/react-native-svg)
* [Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [React Redux](https://github.com/reduxjs/react-redux)
* [Redux](https://github.com/reduxjs/redux)
* [Saga](https://github.com/redux-saga/redux-saga/)
* [Redux Sauce](https://github.com/jkeam/reduxsauce)
* [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)

# Directories inside ``src``
* api - contains axios instance and endpoints to New York Times API
* components - contains reusable components like Button, Text, NewsItem, Image, etc
* consts - contains the API key for accessing New York Times API, API base url, local storage key names and navigation route names
* navigation - contains the navigation stack for news item and news details screens
* screens - contains the component for rendering the news list and news details screens
* store - contains the action types, reducers, sagas and store setup
* themes - contains app colors and metric sizes to be used all through-out the app
* utils - contains utility functions

# News Action Types
* attemptGetNewsList - starts the loading indicator and fetches the data from New York Times API
* doneAttemptGetNewsList - triggers the UI to stop showing the loading indicator for the news list
* setNewsList - sets the news list
* setNewsListHolder - serves as a holder for the news list to be used when doing a keyword search
* setCategory - sets the current selected section e.g World, Food, Politics, Health, etc
* setLocation - sets the current selected location filter

# Network Action Types
* setIsNetworkConnected - sets the network status to true or false depending on the network connection to be used for determining whether to show the data from API or from the local storage (assuming there's already data loaded before)
