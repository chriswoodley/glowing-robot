import React from 'react';
import './styles.css';
import { square } from './utils/math';
import { Button } from '@cw/design-system';
import "@cw/design-system/dist/styles.css";

const App = () => {
  const value = square(4);

  return (
    <>
      <Button label={`App ${value}`} />
      <div>hello world</div>
    </>
  );
}

export default App;