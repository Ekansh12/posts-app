import React,{useContext} from 'react';
import { Container,Typography} from "@material-ui/core";
import {Context} from "../../Context";
import ShowPosts from "../ShowPosts"

export default function Like() {

    const [,,DislikedPost]=useContext(Context);

    return (
        <Container maxWidth="md">
            {DislikedPost.length ?
                <>
                    <ShowPosts posts={DislikedPost} />
                </> :
                <Typography variant="h2" align="center" color="primary" >
                    No Disliked posts yet
                </Typography>
            }
        </Container>
    )
}