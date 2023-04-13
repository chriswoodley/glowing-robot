import React from 'react';
import { square } from './utils/math';
import { Button } from '@cw/design-system';
import './custom.scss';
// import './styles.css';

const App = () => {
  const value = square(4);

  return (
    <>
      <Button label={`App ${value}`} />
      <div>hello <a href="#">world</a></div>
    </>
  );
}

export default App;