import React, { Component } from 'react';

// this file is uploading Material-icons
import '../node_modules/material-icons/iconfont/material-icons.scss'; 

import Search from './components/search/search';

class App extends Component {

  render () {

    return (
      <React.Fragment>
        <Search />
      </React.Fragment>
    );
  }
}

export default App;
