import React from 'react';

import pubs from '../../data/pubs';
import PubList from './PubList';

class PubPage extends React.Component {
  render() {
    return (
      <div>
        <PubList pubs={pubs} cb={this.props.cb} />
      </div>
    );
  }
}

export default PubPage;
