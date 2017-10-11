import React from 'react';
import { Link } from 'react-router-dom';

import drinksdata from '../../data/drinks';
import DrinkList from './DrinkList';

class DrinkPage extends React.Component {
  render() {
    const { id: pubID } = this.props;
    const drinkList = drinksdata.filter(pub => pub.pubid === pubID);

    return (
      <div>
        {pubID === 0 ? (
          <h2>
            Please select a pub <Link to="/">Back</Link>
          </h2>
        ) : (
          <DrinkList drinks={drinkList[0].drinks} />
        )}
      </div>
    );
  }
}

export default DrinkPage;
