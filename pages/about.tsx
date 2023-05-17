import React from "react";
import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";

import NavBar from "@/app/components/navbar/navbar";

type AboutProps = {
  from: string;
};

export default function About({ from }: AboutProps) {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
      <p>{from} 에서 실행이 되었어요~!</p>
    </div>
  );
}

export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
  const str = req ? 'server' : 'client';
  return { props: { from: str } };
}
