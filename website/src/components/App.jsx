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
    fetch('http://localhost:3000/api/conversations/stats')
    .then(data => data.json())
    .then(data => setData(data))
  }, []);
  // const data = {
  //   conversationsByTime: [
  //     {
  //       name: 'Enero',
  //       value: 4000,
  //     },
  //     {
  //       name: 'Febrero',
  //       value: 4400,
  //     },
  //     {
  //       name: 'Marzo',
  //       value: 8400,
  //     },
  //   ],
  //   countTotalRate: [
  //     {
  //       name: '1',
  //       value: 200,
  //     },
  //     {
  //       name: '2',
  //       value: 300,
  //     },
  //     {
  //       name: '3',
  //       value: 600,
  //     },
  //     {
  //       name: '4',
  //       value: 600,
  //     },
  //     {
  //       name: '5',
  //       value: 3000,
  //     },
  //   ],
  //   countTotalRateByTime: [
  //     {
  //       name: 'Enero',
  //       '1': 2300,
  //       '2': 2500,
  //       '3': 5460,
  //       '4': 2565,
  //       '5': 2343,
  //     },
  //     {
  //       name: 'Febrero',
  //       '1': 2400,
  //       '2': 3500,
  //       '3': 5560,
  //       '4': 2565,
  //       '5': 2243,
  //     },
  //     {
  //       name: 'Marzo',
  //       '1': 4400,
  //       '2': 5500,
  //       '3': 6560,
  //       '4': 565,
  //       '5': 2243,
  //     },
  //   ],
  // };

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
