import { React, Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx'




class App extends Component {
  render() {

    return (
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/shop" component={ShopPage} />
      </Switch>

    );
  }
}

export default App;
