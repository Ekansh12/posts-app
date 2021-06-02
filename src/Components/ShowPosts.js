import React,{useState} from 'react';
import { Grid} from "@material-ui/core";
import Search from "./Search";
import MyCard from "./MyCard";

export default function ShowPosts(props) {
    
    const [searchInput,setSearchInput]=useState("");
    
    const searchHandler= e =>{
        setSearchInput(e.target.value);
    }

    return (
        <>
            <Search 
                searchChange={searchHandler}
            />

            <Grid direction="column" container spacing={4} >
                {(props.posts).filter(post =>{
                    if(searchInput==="") return 1;
                    return post.title.includes(searchInput);
                })
                .map( post =>{
                    return (
                        <Grid key={post.id} item xs={10} >
                            <MyCard post={post} ></MyCard>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
