import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';
import Player from './Player/Player.jsx';

function App() {
  const [headerLinks] = useState(headerLinksArray);
  return (
    <>
      <Header headerLinks={headerLinks} />
      <Player />
    </>
  );
}

export default App;
