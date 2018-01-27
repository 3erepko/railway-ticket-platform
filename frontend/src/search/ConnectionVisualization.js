import React from "react";
import PropTypes from "prop-types";

export default class ConnectionVisualization extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { connectionData } = this.props;
    return (
        <div>
          <pre>
            {
              connectionData.map(function(stretch) {
                return JSON.stringify(stretch, null, 2);
              })
            }
          </pre>
          {/* TEST TODO: przerobić */}
          <ul id="timeline">
            <li>
              <div className="date">2008</div>
              <span className="circle"></span>
            </li>
            <li>
              <span className="circle"></span>
              <div className="date">2009</div>
            </li>
            <li>
              <span className="circle"></span>
              <div className="date">2010</div>
            </li>
            <li>
              <span className="circle"></span>
              <div className="date">2011</div>
            </li>
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
