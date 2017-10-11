import React from 'react';
import Button from 'material-ui/Button';
import { ListItem, ListItemText } from 'material-ui/List';

class PubListItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickPub = this.clickPub.bind(this);
  }

  clickPub(e, id) {
    this.props.cb(id);
  }

  render() {
    const { pub } = this.props;

    return (
      <ListItem>
        <ListItemText
          primary={pub.name}
          secondary={`within ${pub.radius} miles`}
        />
        <Button raised color="primary" onClick={e => this.clickPub(e, pub.id)}>
          Drink Here
        </Button>
      </ListItem>
    );
  }
}

export default PubListItem;
