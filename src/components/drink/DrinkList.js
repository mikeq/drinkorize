import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Button from 'material-ui/Button';

import DrinkListItem from './DrinkListItem';
import { orderRound } from '../../actions/rounds';

class DrinkList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinkCount: [],
      drinksOrder: []
    };

    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.gotoPubs = this.gotoPubs.bind(this);
    this.order = this.order.bind(this);
  }

  inc(id) {
    let newArray = this.state.drinkCount;
    newArray[id] = newArray[id] + 1 || 1;
    this.setState({ drinkCount: newArray });
  }

  dec(id) {
    if (
      this.state.drinkCount[id] === undefined ||
      this.state.drinkCount[id] === 0
    ) {
      return;
    }

    let newArray = this.state.drinkCount;
    newArray[id] = newArray[id] - 1;
    this.setState({ drinkCount: newArray });
  }

  gotoPubs(e) {
    this.props.history.push('/');
  }

  order(e) {
    const selectedIDs = Object.keys(this.state.drinkCount).map(x =>
      parseInt(x, 10)
    );
    const mapped = this.props.drinks
      .filter(drink => {
        return (
          selectedIDs.includes(drink.id) && this.state.drinkCount[drink.id] > 0
        );
      })
      .map(drink => {
        return { ...drink, count: this.state.drinkCount[drink.id] };
      });

    this.props.sendOrder(mapped);
    this.props.history.push('/bartender');
  }

  render() {
    const { drinks, classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {drinks.map(drink => (
            <DrinkListItem
              key={drink.id}
              drink={drink}
              count={
                this.state.drinkCount[drink.id]
                  ? this.state.drinkCount[drink.id]
                  : 0
              }
              inc={this.inc}
              dec={this.dec}
            />
          ))}
        </List>
        <div>
          <Button
            raised
            className={classes.bottomButton}
            onClick={this.gotoPubs}
          >
            &lt; Pubs
          </Button>
          <Button
            raised
            className={classes.bottomButton}
            disabled={!this.state.drinkCount.length}
            onClick={this.order}
          >
            Order &gt;
          </Button>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
    marginTop: 10
  },
  bottomButton: {
    width: '50%'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    sendOrder: order => {
      dispatch(orderRound(order));
    }
  };
};

export default connect(null, mapDispatchToProps)(
  withRouter(withStyles(styles)(DrinkList))
);
