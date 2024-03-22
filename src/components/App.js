import React, {Component, useState} from "react";
import '../styles/App.css';
import FlameApp from './FlameApp.js'

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <FlameApp/>
            </div>
        )
    }
}


export default App;
