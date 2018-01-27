import React from "react";

import ConnectionSearchResultList from "./search/ConnectionSearchResultList";

// TODO: AJAX
const results = [
  [
    {
      "fromStationName": "Warszawa Centralna",
      "fromStationAbbreviation": "WAW CEN",
      "toStationName": "Szczecin Główny",
      "toStationAbbreviation": "SZZ GŁ",
      "departureTimestamp": 1517051026000,
      "arrivalTimestamp": 1517072626000,
      "price": 70.00,
      "type": "TLK"
    },
    {
      "fromStationName": "Szczecin Główny",
      "fromStationAbbreviation": "SZZ GŁ",
      "toStationName": "Bruksela",
      "toStationAbbreviation": "BRU",
      "departureTimestamp": 10.5,
      "arrivalTimestamp": 1517109346000,
      "price": 290.75,
      "type": "EIC"
    }
  ],
  [
    {
      "fromStationName": "Warszawa Centralna",
      "fromStationAbbreviation": "WAW CEN",
      "toStationName": "Bruksela",
      "toStationAbbreviation": "BRU",
      "departureTimestamp": 1517584546000,
      "arrivalTimestamp": 1517694520000,
      "price": 42.70,
      "type": "TLK"
    }
  ],
  [
    {
      "fromStationName": "Warszawa Centralna",
      "fromStationAbbreviation": "WAW CEN",
      "toStationName": "Poznań Główny",
      "toStationAbbreviation": "POZ GŁ",
      "departureTimestamp": 1517051726000,
      "arrivalTimestamp": 1517061726000,
      "price": 1.30,
      "type": "Regio"
    },
    {
      "fromStationName": "Poznań Główny",
      "fromStationAbbreviation": "POZ GŁ",
      "toStationName": "Berlin",
      "toStationAbbreviation": "BER",
      "departureTimestamp": 1517062736000,
      "arrivalTimestamp": 1517092726000,
      "price": 7.50,
      "type": "Regio"
    },
    {
      "fromStationName": "Berlin",
      "fromStationAbbreviation": "BER",
      "toStationName": "Brulsela",
      "toStationAbbreviation": "BRU",
      "departureTimestamp": 1517092896000,
      "arrivalTimestamp": 1517112726000,
      "price": 34.23,
      "type": "IC"
    }
  ]
];

export default class MainContainer extends React.Component {

  render() {
    return <ConnectionSearchResultList
        connectionSearchResults={results}/>;
  }

}
