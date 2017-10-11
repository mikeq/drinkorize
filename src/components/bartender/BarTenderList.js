import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router';

import BarTenderListItem from './BarTenderListItem';

class BarTenderList extends React.Component {
  constructor(props) {
    super(props);

    this.newRound = this.newRound.bind(this);
    this.gotoPub = this.gotoPub.bind(this);
  }

  newRound() {
    this.props.history.push('/drinks');
  }

  gotoPub() {
    this.props.history.push('/');
  }

  render() {
    const { round, classes } = this.props;
    let totalPrice = 0;

    if (round !== undefined) {
      round.drinks.forEach(drink => {
        totalPrice += drink.price * drink.count;
      });
    }

    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            {round.drinks.map(drink => {
              return <BarTenderListItem key={drink.id} drink={drink} />;
            })}
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography type="title">
              Total: £{totalPrice.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
        <div>
          <Button
            raised
            className={classes.bottomButton}
            onClick={this.newRound}
          >
            &lt; New Round
          </Button>
          <Button
            raised
            className={classes.bottomButton}
            onClick={this.gotoPub}
          >
            New Pub
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

export default withRouter(withStyles(styles)(BarTenderList));
