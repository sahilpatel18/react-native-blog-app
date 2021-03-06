import React, {useReducer} from 'react'
import createDataContext from './createDataContext'


const blogReducer = (state, action) => {
switch(action.type){
    case 'DELETE_POST':
        return state.filter((post) => post.id !== action.payload);
    case 'ADD_POST':
        return [...state, { 
            id: Math.floor(Math.random() * 99999), 
            title: action.payload.title, 
            content: action.payload.content
        }
    ];
    default:
        return state
    } 
}

const addBlogPost = (dispatch) => {
    return (title, content) => {
        dispatch({ type: 'ADD_POST', payload: {title, content} })
    }   
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: 'DELETE_POST', payload: id})
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost}, [])