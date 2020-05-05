import React from 'react';
import '../styles/components/App.styl';
import RenderBarChart from './RenderBarChart';
import RenderAreaChart from './RenderAreaChart';

const App = () => {
  return (
    <div>
      <RenderBarChart />
      <RenderAreaChart />
    </div>
  );
};

export default App;
