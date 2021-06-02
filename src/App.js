import React from "react";
import {Switch, Route} from "react-router-dom";
import ListAllPosts from "./Components/Routes/ListAllPosts";
import CreateNewPost from "./Components/Routes/CreateNewPost";
import UpdatePost from "./Components/Routes/UpdatePost";
import Navbar from "./Components/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import {PostContext} from "./Context";
import Like from "./Components/Routes/Like";
import Dislike from "./Components/Routes/Dislike"

const useStyles = makeStyles(() => ({
    custom: {
        paddingTop: 60
    }
}))

function App() {
    const classes = useStyles();

    return(
        <>
            <Navbar />

            <PostContext>
                <div className={classes.custom}>
                    <Switch>
                        <Route exact path="/" component={ListAllPosts} />
                        <Route exact path="/create" component={CreateNewPost} />
                        <Route path="/posts/:id" component={UpdatePost} />
                        <Route exact path="/liked" component={Like} />
                        <Route exact path="/disliked" component={Dislike} />
                    </Switch>
                </div>
            </PostContext>
        </>
    )
}

export default App;
