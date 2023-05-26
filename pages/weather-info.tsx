import React, { useState, useEffect } from "react";

import Layout from "@/app/components/layout";
import Weather from "@/app/components/weather.module";
import Time from "@/app/components/time";

export default function WeatherInfo() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/api/content');

      const { content } = await response.json();
      setContent(JSON.parse(content));
    };

    fetchContent(); // Fetch the initial content
  
    const interval = setInterval(fetchContent, 5000);
    
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <Layout>
      <Time />
      <Weather weather={content} />
    </Layout>
  );
}
