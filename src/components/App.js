import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';

function App() {
  const [headerLinks, setHeaderLinks] = useState([]);
  setHeaderLinks(headerLinksArray);
  return (
    <>
      <Header headerLinks={headerLinks} />
    </>
  );
}

export default App;
