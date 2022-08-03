import * as React from 'react';
import Example1 from './components/Example1';

const App = () => {
  console.log('process.env.TEST ===', process.env.REACT_APP_TEST);

  return (
    <div>
      <Example1 />
    </div>
  );
};

export default App;
