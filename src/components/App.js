import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';

function App() {
  const [headerLinks] = useState(headerLinksArray);
  return (
    <>
      <Header headerLinks={headerLinks} />
    </>
  );
}

export default App;
