import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import {AppContextProvider} from "./Context/AppContext"

ReactDOM.render(
<AppContextProvider>
    <Router>
        <App />
    </Router>
</AppContextProvider>
, document.getElementById('root'));
