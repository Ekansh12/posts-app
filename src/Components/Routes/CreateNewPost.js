import React,{useState} from "react";
import {Container,Typography,Button,Card,CardContent} from "@material-ui/core";
import MyTextField from "../MyTextField";
import axios from "axios";

function CreateNewPost() {
    const [title,setTitle]=useState("");
    const [text,setText]= useState("");
    const [err,setError]= useState(0);
    const [headText,setHeadText]=useState("Create a Post");

    const titleChange= e =>{
        setTitle(e.target.value);
        setHeadText("Create a Post");

        if(err===1) setError(0);
        if(err===3) setError(2);
    }

    const textChange= e =>{
        setText(e.target.value);
        setHeadText("Create a Post");
        
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

            setHeadText("Post Created");
            setText("");
            setTitle("");
        }
        
    }

    return(
        <Container maxWidth="sm">
            <Card raised>
                <CardContent>
                    <Typography variant="h2" align="center" color={headText==="Post Created" ?"secondary" :"primary"} >
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
                            Submit
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default CreateNewPost;
