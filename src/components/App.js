import React, { Component } from 'react';
import LiveDisplay from './live/LiveDisplay';
import ReplayDisplay from './replay/ReplayDisplay';
import ReplaysDisplay from './replay/ReplaysDisplay';
import ClipDisplay from './clip/ClipDisplay';
import NavbarDisplay from './navbar/NavbarDisplay'
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import { signUpConfig } from './Auth';

import {
    Switch,
    Route
  } from "react-router-dom";


class App extends Component {
    render() {
      return (
        <div>
          <NavbarDisplay />
          <div >
            <Switch>
            <Route exact path="/" component={LiveDisplay} />
            <Route exact path="/home" component={LiveDisplay} />
            <Route exact path="/login" component={ClipDisplay} />
            <Route path="/live" component={LiveDisplay} />
            <Route path="/clip" component={ClipDisplay} />
            <Route path="/replays" component={ReplaysDisplay} />
            <Route path="/replay/:id" component={ReplayDisplay} />
            </Switch>
          </div>
        </div>
      )
    }
  }
  
  export default App;
  // export default withAuthenticator(App, false, [], null, null, signUpConfig);
