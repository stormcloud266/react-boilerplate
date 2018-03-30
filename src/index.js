import React from 'react';
import ReactDOM from 'react-dom';

const title = (
  <div>
    <h1>My Minimal React Webpack Babel Setup</h1>
  </div>
);

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
module.hot.accept();
