import * as React from 'react';

const App = () => {
  console.log('process.env.TEST ===', process.env.REACT_APP_TEST);

  return (
    <div>
      React
      <div className="less">Feature: less</div>
      <div className="bg-red-900 text-white">tailwind css demo</div>
    </div>
  );
};

export default App;
