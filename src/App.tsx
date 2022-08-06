import * as React from 'react';
import Example1 from './components/Example1';
import Example2 from './components/Example2/Example2';

const App = () => {
  console.log('process.env.TEST ===', process.env.REACT_APP_TEST);

  return (
    <div>
      <Example1 />
      <hr />
      <Example2 />
    </div>
  );
};

export default App;
