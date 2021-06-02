import React,{useState,useContext} from "react";
import { Card,CardHeader,CardContent,Typography,CardActions,IconButton,Grid } from "@material-ui/core";
import {Edit,Delete,ThumbUp,ThumbDown} from "@material-ui/icons";
import {Link} from 'react-router-dom';
import axios from "axios";
import {Context} from "../Context";


function MyCard(props) {

    const [likedPost,setLikedPost,dislikedPost,setDislikedPost]=useContext(Context);

    const alreadyLiked=()=>{
        const found=likedPost.find(p=> p.id===props.post.id);
        if(found) return 1;
        return 0;
    }

    const alreadyDisliked=()=>{
        const found=dislikedPost.find(p=> p.id===props.post.id);
        if(found) return 1;
        return 0;
    }

    const [liked,setLiked]=useState(alreadyLiked());
    const [disliked,setDisliked]=useState(alreadyDisliked());

    const likePostHandler=()=>{
        const flag=likedPost.filter((p)=>{
            return p.id===props.post.id;
        })

        if(flag.length===0){
            setLikedPost((prev)=> [...prev, props.post]);
            setDislikedPost((prev)=> prev.filter((p)=> p.id!==props.post.id));
            setLiked(1);
        }
        else{
            setLikedPost((prev)=> prev.filter((p)=> p.id!==props.post.id));
            setLiked(0);
        }

        setDisliked(0);
    }

    const dislikePostHandler=()=>{
        const flag=dislikedPost.filter((p)=>{
            return p.id===props.post.id;
        })

        if(flag.length===0){
            setDislikedPost((prev)=> [...prev, props.post]);
            setLikedPost((prev)=> prev.filter((p)=> p.id!==props.post.id));
            setDisliked(1);
        }
        else{
            setDislikedPost((prev)=> prev.filter((p)=> p.id!==props.post.id));
            setDisliked(0);
        }

        setLiked(0);
    }

    const deletePostHandler= async()=>{
        if(alreadyLiked()){
            setLikedPost((prev)=> prev.filter((p)=> p.id!==props.post.id));
            setLiked(0);
        }
        if(alreadyDisliked()){
            setDislikedPost((prev)=> prev.filter((p)=> p.id!==props.post.id));
            setDisliked(0);
        }
        
        const post= await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`);
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`);
        console.log("This post id deleted",post.data);
    }

    return(
        <Card raised>
            <CardHeader title={props.post.title} />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{props.post.body}</Typography>
            </CardContent>

            <CardActions >
                <Grid container justify="space-between">
                    <Grid item>
                        <IconButton onClick={likePostHandler}>
                            <ThumbUp color={liked ?"error" :"disabled"}/>
                        </IconButton>
                        <IconButton onClick={dislikePostHandler}>
                            <ThumbDown color={disliked ?"error" :"disabled"}/>
                        </IconButton>
                    </Grid>
                    
                    <Grid item>
                        <IconButton color="primary" component={ Link } to={"/posts/"+props.post.id}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={deletePostHandler}>
                            <Delete color="secondary"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>

        </Card>
    )
}

export default MyCard;
