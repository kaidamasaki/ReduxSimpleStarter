import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDh1__pavGMxmPx7CQkh7mzdsCL7GmN1MY';

const App = () => {
  return (
    <div>
      <p>{API_KEY}</p>
      <SearchBar />
    </div>);
};

ReactDOM.render(<App />, document.querySelector('.container'));
