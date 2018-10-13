import React, { Component } from 'react';
import { Provider, Observer } from 'mobx-react';
import { observable } from 'mobx';
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Store from './store'
import Owners from './owners'
import Pets from './pets'

const store = new Store();

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <div>
                        <header>
                            <Navbar>
                                <Nav pills>
                                    {console.log(window.location.hash)}
                                    <NavItem>
                                        <NavLink tag={RRNavLink} className="nav-link" to="/pets" activeClassName="active">PETS</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={RRNavLink} className="nav-link" to="/owners" activeClassName="active">OWNERS</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
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