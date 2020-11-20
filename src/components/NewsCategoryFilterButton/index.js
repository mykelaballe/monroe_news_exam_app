import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import Button from '../Button'
import {Colors, Metrics} from '../../themes'
import {connect} from 'react-redux'
import Actions from '../../store/actions'

const WIDTH = (Dimensions.get('window').width / 3 ) - 25

const Cmp = ({data, attempting, selectedCategory, attemptGetNews}) => {

    const handlePress = () => attemptGetNews({category: data.value})

    return (
        <Button
            disabled={attempting}
            color={selectedCategory === data.value ? 'purple' : Colors.brand}
            text={data.label}
            uppercase={false}
            onPress={handlePress}
            style={style.container}
        />
    )
}

const style = StyleSheet.create({
    container: {
        width: WIDTH,
        margin: Metrics.sm
    }
})

const mapStateToProps = ({news}) => ({
    attempting: news.attempting,
    selectedCategory: news.category
})

const mapDispatchToProps = dispatch => ({
    attemptGetNews: payload => dispatch(Actions.Creators.attemptGetNewsList(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cmp)