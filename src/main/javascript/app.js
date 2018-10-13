import React, { Component } from 'react';
import { Provider, Observer } from 'mobx-react';
import { observable } from 'mobx';
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Store from './store'
import Owners from './owners'
import Pets from './pets'

const store = new Store();

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <div className="app">
                        <header className="app_header">
                            <nav className="nav">
                                <ul className="menu">
                                    <li className="menu_item"><Link to="/pets">PETS</Link></li>
                                    <li className="menu_item"><Link to="/owners">OWNERS</Link></li>
                                </ul>
                                <hr />
                            </nav>
                        </header>
                        <main>
                            <Switch>
                                <Route path='/owners' exact component={Owners} />
                                <Route path='/pets' exact component={Pets} />
                                <Redirect from="/" to="/pets" />
                            </Switch>
                        </main>
                    </div>
                </Provider>
            </HashRouter>
        );
    }
}

export default App;