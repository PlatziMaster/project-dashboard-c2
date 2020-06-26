import React, {useEffect, useState} from 'react';
import '../styles/components/App.styl';
import RenderBarChart from './RenderBarChart';
import RenderAreaChart from './RenderAreaChart';
import RenderPieChart from './RenderPieChart';
import RenderStackedBarChart from './RenderStackedBarChart';

const App = () => {

  const [data, setData]= useState({
    conversationsByTime: [],
    countTotalRate: [],
    countTotalRateByTime: []
  });

  useEffect(()=> {
    fetch('http://localhost:3000/api/conversations/stats?start=2019/01/01&end=2019/01/15')
    .then(data => data.json())
    .then(data => setData(data))
  }, []);

  return (
    <div>
      <RenderAreaChart data={data.conversationsByTime} />
      <RenderPieChart data={data.countTotalRate} />
      <RenderStackedBarChart data={data.countTotalRateByTime} />
      <RenderBarChart />
    </div>
  );
};

export default App;
