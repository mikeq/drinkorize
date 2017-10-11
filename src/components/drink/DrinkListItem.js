import React from 'react';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import { ListItem, ListItemText } from 'material-ui/List';

class DrinkListItem extends React.Component {
  render() {
    const { drink, count } = this.props;
    return (
      <ListItem>
        <ListItemText
          primary={drink.name}
          secondary={`£${drink.price.toFixed(2)}.  SubTotal: £${(drink.price *
            count
          ).toFixed(2)}`}
        />
        <IconButton color="accent" onClick={e => this.props.inc(drink.id)}>
          <ThumbUp />
        </IconButton>
        {count}{' '}
        <IconButton color="accent" onClick={e => this.props.dec(drink.id)}>
          <ThumbDown />
        </IconButton>
      </ListItem>
    );
  }
}

export default DrinkListItem;
