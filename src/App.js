import 'App.css';
import React, { Fragment } from 'react';
import Navbar from 'components/Navbar';
import Views from 'views';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Views />
    </Fragment>
  );
}

export default App;
