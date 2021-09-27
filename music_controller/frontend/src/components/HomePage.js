import React from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    Redirect
} from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/join' component={RoomJoinPage}/>
                    <Route path='/create' component={CreateRoomPage}/>
                    <Route exact path='/'>
                        <h1>This is the home page</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default HomePage;
