import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import React, { useState, useEffect } from "react";

import Layout from "@/app/components/layout";
import Weather from "@/app/components/weather.module";
import Time from "@/app/components/time";

export default function WeatherInfo() { //{fileContent}: FileProps
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('/api/content');

      const { content } = await response.json();
      // console.log(content);
      setContent(JSON.parse(content));
    };

    console.log(content);
    console.log(typeof content);
    fetchContent(); // Fetch the initial content
  
    // Schedule the content update every 5 seconds
    const interval = setInterval(fetchContent, 5000);
  
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Time />
      <Weather weather={content} />
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const newData = await fetchUpdatedContent();
//   // setCurrentData(newData);
  
//   return {
//     props: {newData},
//   }
// }
