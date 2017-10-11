import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { withStyles } from 'material-ui';

import './App.css';
import NavBar from './components/navbar/NavBar';
import PubPage from './components/pub/PubPage';
import DrinkPage from './components/drink/DrinkPage';
import BarTenderPage from './components/bartender/BarTenderPage';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.drinkHere = this.drinkHere.bind(this);
    this.state = {
      selectedPub: 0
    };
  }

  drinkHere(pubID) {
    this.setState({ selectedPub: pubID }, () =>
      this.props.history.push(`/drinks`)
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <PubPage cb={this.drinkHere} />}
          />
          <Route
            path="/drinks"
            render={() => <DrinkPage id={this.state.selectedPub} />}
          />
          <Route path="/bartender" component={BarTenderPage} />
          <Route render={() => <PubPage cb={this.drinkHere} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(App));
