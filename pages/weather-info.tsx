import React, { useState, useEffect } from "react";

import Layout from "@/app/components/layout";
import Weather from "@/app/components/weather.module";
import Time from "@/app/components/time";

export default function WeatherInfo() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/api/content');

      const { content } = response.status === 200 ? await response.json() : { content: null };
      setContent(content);
    };

    fetchContent(); // Fetch the initial content
  
    const interval = setInterval(fetchContent, 2000); // 2초마다 한 번씩
    
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <Layout>
      <Time />
      {content !== null ? (
      <Weather weather={content}/>
      ) : <p>데이터를 불러오는데 실패했습니다.</p>}
    </Layout>
  );
}
