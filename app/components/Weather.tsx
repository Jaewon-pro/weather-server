import React from 'react'
import styles from '@/components/Weather.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type WeatherProps = {
    recordedAt: Date
    temperature: number
    humidity: number
}

const Weather: React.FC<{ weather: WeatherProps | any }> = ({ weather }) => {
    const data: Array<WeatherProps> = [
        {recordedAt: new Date('2023-09-24 05:24:07'), temperature: 23, humidity: 24}, 
        {recordedAt: new Date('2023-09-25 05:24:07'), temperature: 12, humidity: 64},
        {recordedAt: new Date('2023-09-25 06:24:07'), temperature: 12, humidity: 14},
        {recordedAt: new Date('2023-09-25 07:24:07'), temperature: 32, humidity: 44},
        {recordedAt: new Date('2023-09-26 05:24:07'), temperature: 44, humidity: 26}];
    
    return (
        <div>
        <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="recordedAt"/>
            <YAxis/>
            <CartesianGrid stroke="#eee" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        </LineChart>
        </div>
    )
}

export default Weather
