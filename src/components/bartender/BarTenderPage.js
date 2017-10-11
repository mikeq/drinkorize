import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BarTenderList from './BarTenderList';

class BarTenderPage extends React.Component {
  render() {
    const { round = null } = this.props;

    return (
      <div>
        {round === null ? (
          <h2>
            Please select a pub <Link to="/">Back</Link>
          </h2>
        ) : (
          <BarTenderList round={round} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    round: state.rounds[state.rounds.length - 1]
  };
};

export default connect(mapStateToProps, null)(BarTenderPage);
