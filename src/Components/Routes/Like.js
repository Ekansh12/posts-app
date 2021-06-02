import React,{useContext} from 'react';
import { Container,Typography} from "@material-ui/core";
import {Context} from "../../Context";
import ShowPosts from "../ShowPosts"

export default function Like() {

    const [likedPost]=useContext(Context);

    return (
        <Container maxWidth="md">
            {likedPost.length ?
                <>
                    <ShowPosts posts={likedPost} />
                </> :
                <Typography variant="h2" align="center" color="primary" >
                    No Liked posts yet
                </Typography>
            }
        </Container>
    )
}
