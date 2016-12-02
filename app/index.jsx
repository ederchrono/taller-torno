import React from 'react';
import ReactDOM from 'react-dom';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <div>
    <h1>En construcción...</h1>
  </div>,
  document.getElementById('app')
);
