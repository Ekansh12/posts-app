import React from "react";
import {Switch, Route} from "react-router-dom";
import ListAllPosts from "./Components/ListAllPosts"
import CreateNewPost from "./Components/CreateNewPost"
import UpdatePost from "./Components/UpdatePost"
import Navbar from "./Components/Navbar"

function App() {
    return(
        <div>
            <Navbar />
            
            <Switch>
                <Route exact path="/" component={ListAllPosts} />
                <Route exact path="/create-new-post" component={CreateNewPost} />
                <Route path="/update/:id" component={UpdatePost} />
            </Switch>
        </div>
    )
}

export default App;
