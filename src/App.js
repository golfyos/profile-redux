import React, {Component , Fragment} from 'react';
import './App.css';
import Login from './components/login'
import Profile from './components/profile'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import reduxStore from './store'

class App extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <BrowserRouter>
                    <Fragment>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/profile" component={Profile}/>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
