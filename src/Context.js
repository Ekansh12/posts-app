import React, {useState,createContext} from 'react';

export const Context=createContext();

export const PostContext= (props)=>{

    const [likedPost,setLikedPost]=useState([]);
    const [dislikedPost,setDislikedPost]=useState([]);

    return (
        <Context.Provider value={[likedPost,setLikedPost,dislikedPost,setDislikedPost]}>
            {props.children}
        </Context.Provider>
    )
}
