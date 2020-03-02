import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import RateExchangeList from '../containers/rate-exchange-list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <RateExchangeList/>
      </div>
    );
  }
}
