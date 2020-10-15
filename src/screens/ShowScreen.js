import React,{useContext} from 'react'
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({route}) => {
    const {state} = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === route.params?.id)

    return (
        <View>
          <Text>{blogPost.title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({

})

export default ShowScreen