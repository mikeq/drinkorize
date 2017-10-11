import React from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Input from 'material-ui/Input';
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';

import PubListItem from './PubListItem';

class PubList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      close: false
    };

    this.change = this.change.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  change(e) {
    this.setState({ filter: e.target.value });
  }

  handleLocation() {
    this.setState({ close: !this.state.close });
  }

  render() {
    const { pubs, classes } = this.props;

    return (
      <div className={classes.root}>
        <Input
          placeholder="Search Pubs"
          className={classes.input}
          onChange={this.change}
        />
        <FormControlLabel
          control={
            <Switch checked={this.state.close} onChange={this.handleLocation} />
          }
          label="close by"
        />

        <List>
          {pubs
            .filter(pub => {
              if (this.state.filter === '') return true;

              const regex = new RegExp(this.state.filter, 'i');
              return regex.test(pub.name);
            })
            .filter(pub => (this.state.close ? pub.radius < 2 : true))
            .map(pub => (
              <PubListItem key={pub.id} pub={pub} cb={this.props.cb} />
            ))}
        </List>
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
  input: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(PubList);
