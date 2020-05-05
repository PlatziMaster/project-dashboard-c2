import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    label: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    label: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    label: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    label: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    label: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    label: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    label: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class RenderBarChart extends PureComponent {
  render() {
    return (
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
        <Bar dataKey="amt" fill="red" />
      </BarChart>
    );
  }
}
