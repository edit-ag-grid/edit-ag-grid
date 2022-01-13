/* eslint-disable import/no-extraneous-dependencies */
// import 'react-app-polyfill/ie11';
import * as React from 'react';
import { render } from 'react-dom';

import './index.less';
import Thing from '..';

const App = () => {
  return <Thing />;
};
render(<App />, document.getElementById('root'));
