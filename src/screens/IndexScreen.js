import React,{useContext} from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'


const IndexScreen = () => {
const {state, addBlogPost} = useContext(Context)


    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item}) => {
                return (
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Feather style={styles.icon} name='trash' />
                    </View>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
row:{
    borderTopWidth: 1,
    borderColor:'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10
},
title:{
    fontSize: 18,
},
icon:{
    fontSize:24
}
})

export default IndexScreen