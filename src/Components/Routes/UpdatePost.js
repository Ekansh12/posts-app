import React,{useState,useEffect} from "react";
import {Container,Typography,Button,Card,CardContent} from "@material-ui/core";
import MyTextField from "../MyTextField";
import axios from "axios";

function UpdatePost(props) {
    
    const [title,setTitle]=useState("");
    const [text,setText]= useState("");
    const [err,setError]= useState(0);
    const [headText,setHeadText]=useState("Update a Post");

    useEffect(()=>{
        const fetchPost= async ()=>{
            const post= await axios.get(`https://jsonplaceholder.typicode.com${props.location.pathname}`);
            setTitle(post.data.title);
            setText(post.data.body);
        }

        fetchPost();
    },[props])

    const titleChange= e =>{
        setTitle(e.target.value);
        setHeadText("Update a Post");

        if(err===1) setError(0);
        if(err===3) setError(2);
    }

    const textChange= e =>{
        setText(e.target.value);
        setHeadText("Update a Post");
        
        if(err===2) setError(0);
        if(err===3) setError(1);
    }

    const formSubmit= async (e) =>{
        e.preventDefault();

        setError(0);
        if(title==="") setError(1);
        if(text==="") setError(2);
        if(title==="" && text==="") setError(3);

        if(title!=="" && text!==""){
            const data={
                userId: 7,
                title,
                body: text
            }
            
            const newPost= await axios.post("https://jsonplaceholder.typicode.com/posts",data);
            console.log(newPost.data)

            setHeadText("Post Updated");
            setText(newPost.data.body);
            setTitle(newPost.data.title);
            // props.history.push("/");
        }
        
    }

    return(
        <Container maxWidth="sm">
            <Card raised>
                <CardContent>
                    <Typography variant="h2" align="center" color={headText==="Post Updated" ?"secondary" :"primary"} >
                        {headText}
                    </Typography>

                    <form noValidate autoComplete="off" onSubmit={formSubmit}>
                        <MyTextField 
                            label="Post Title"
                            err={err===1 || err===3}
                            multi={0}
                            value={title}
                            onChange={titleChange}
                        />
                        <MyTextField 
                            label="Post Title"
                            err={err===2 || err===3}
                            multi={1}
                            value={text}
                            onChange={textChange}
                        />
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Update
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default UpdatePost;
