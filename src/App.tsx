import logo from './logo.svg';
import './App.css';
import { RootRouter } from '@qbitui/router';
import Api from '@qbitapi/sdk-api';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    console.log(Api);
  }, []);

  return (
    <>
      <RootRouter />
    </>
  );
}

export default App;
