import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

class BarTenderListItem extends React.Component {
  render() {
    const { drink, classes } = this.props;

    return [
      <Typography key={drink.id} type="title">
        {drink.name} x {drink.count}
      </Typography>,
      <Typography
        key={drink.id + 'sub'}
        type="subheading"
        className={classes.barlistitem}
      >
        Subtotal: £{(drink.count * drink.price).toFixed(2)}
      </Typography>
    ];
  }
}

const styles = theme => ({
  barlistitem: {
    marginBottom: 10
  }
});

export default withStyles(styles)(BarTenderListItem);
