import React from "react";
import PropTypes from "prop-types";

import moment from 'moment';

export default class ConnectionVisualization extends React.Component {

  constructor(props) {
    super(props);
  }

  formatTime(timestamp) {
    return moment(timestamp).format("kk:mm");
  }

  formatDate(timestamp) {
    return moment(timestamp).format("DD.MM");
  }

  render() {
    const { connectionData } = this.props;
    const firstStretch = connectionData[0];

    return (
        <div className="connection-visualization__container">
          <ul className="connection-visualization">
            <li key={firstStretch.toString()}>
              <span className="connection-visualization__city">{firstStretch.fromStationAbbreviation}</span>
              <span className="connection-visualization__circle"></span>
              <span className="connection-visualization__datetime">
                {this.formatTime(firstStretch.departureTimestamp)}
                <br/>
                {this.formatDate(firstStretch.departureTimestamp)}
              </span>
            </li>
            {
              connectionData.map((stretch) => {
                return <li key={stretch.toString()}>
                  <span className="connection-visualization__city">{stretch.toStationAbbreviation}</span>
                  <span className="connection-visualization__circle"></span>
                  <span className="connection-visualization__datetime">
                    {this.formatTime(stretch.arrivalTimestamp)}
                    <br/>
                    {this.formatDate(stretch.arrivalTimestamp)}
                  </span>
                </li>;
              })
            }
          </ul>
        </div>
    );
  }

}

ConnectionVisualization.propTypes = {
  connectionData: PropTypes.arrayOf(
      PropTypes.shape(
          {
            fromStationName: PropTypes.string.isRequired,
            fromStationAbbreviation: PropTypes.string.isRequired,
            toStationName: PropTypes.string.isRequired,
            toStationAbbreviation: PropTypes.string.isRequired,
            departureTimestamp: PropTypes.number.isRequired,
            arrivalTimestamp: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            type: PropTypes.string
          }
      )
  )
};
