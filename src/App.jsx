import React from 'react';
import Page from './page/github'
import {MainProvider} from './Components/mainContext'

function App() {
  return (
    <MainProvider>
    <>
      <Page />
    </>
    </MainProvider>
  );
}

export default App;
