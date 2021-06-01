import React, {useState,useEffect} from "react";
import axios from "axios";

function ListAllPosts() {
    
    const [data,setData]=useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            setData(response.data);
        })
    },[]);

    return(
        <div>
            {data.map((d,i) => <li>{d.title}</li>)}
        </div>
    )
}

export default ListAllPosts;