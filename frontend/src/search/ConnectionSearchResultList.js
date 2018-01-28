import React from "react";
import PropTypes from "prop-types";

import { List, ListItem, ListDivider } from "react-toolbox/lib/list";
import FontIcon from "react-toolbox/lib/font_icon";

import ConnectionSearchResult from "./ConnectionVisualization";
import "./search.scss";

export default class ConnectionSearchResultList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.connectionSearchResults.length === 0) {
      return <h1>No results</h1>;
    }

    let startStation = this.getStartStation(this.props.connectionSearchResults);
    let endStation = this.getEndStation(this.props.connectionSearchResults);

    return <List>
      <h1 className="search-results__header">
        <span className="search-results__header-station">{startStation}</span>
        <FontIcon value="chevron_right" className="md-36"/>
        <span className="search-results__header-station">{endStation}</span>
      </h1>

      {
        this.props.connectionSearchResults.map(function(result) {
          return <div key={result.toString()}>
            <ListItem selectable ripple itemContent={
              <ConnectionSearchResult connectionData={result}/>
            }
            />
            <ListDivider/>
          </div>;
        })
      }
    </List>;
  }

  getStartStation(results) {
    return results[0][0].fromStationName;
  }

  getEndStation(results) {
    let firstResult = results[0];
    return firstResult[firstResult.length - 1].toStationName;
  }
}

ConnectionSearchResultList.propTypes = {
  connectionSearchResults: PropTypes.arrayOf(PropTypes.array)
};
