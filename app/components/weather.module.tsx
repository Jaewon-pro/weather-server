import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export type WeatherProps = {
  recordedAt: Date
  temperature: number
  humidity: number
}

const Weather: React.FC<{ weather: WeatherProps[] }> = ({ weather }) => {
  return (
    <>
      <div className='temperature-chart'>
        <LineChart width={500} height={300} data={weather} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <XAxis dataKey="recordedAt"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" isAnimationActive={false}/>
        </LineChart>
      </div>
        <div className='humidity-chart'>
        <LineChart width={500} height={300} data={weather} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <XAxis dataKey="recordedAt"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="humidity" stroke="#82ca9d" isAnimationActive={false}/>
        </LineChart>
      </div>
    </>
  );
}

export default Weather;
