import React, {useState,useEffect} from "react";
import axios from "axios";
import { Container} from "@material-ui/core";
import ShowPosts from "../ShowPosts"

function ListAllPosts() {
    
    const [posts,setPosts]=useState([]);

    const fetchPosts= async ()=>{
        const allPosts= await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(allPosts.data);
    }

    useEffect(()=>fetchPosts(),[]); 

    return(
        <Container maxWidth="md">
            <ShowPosts posts={posts} />
        </Container>
    )
}

export default ListAllPosts;