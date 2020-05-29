import React from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const RenderStackedBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="1" stackId="rate" fill="#FED13D" />
        <Bar dataKey="2" stackId="rate" fill="#10dc60" />
        <Bar dataKey="3" stackId="rate" fill="#B70000" />
        <Bar dataKey="4" stackId="rate" fill="#0cd1e8" />
        <Bar dataKey="5" stackId="rate" fill="#7044ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RenderStackedBarChart;
