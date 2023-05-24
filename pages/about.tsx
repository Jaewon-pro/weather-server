import React from "react";
import Layout from "@/app/components/layout";

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>2023 IoT 임베디드 프로젝트입니다.</p>
    </Layout>
  );
}

// import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
// type AboutProps = {
//   from: string;
// };

// export default function About({ from }: AboutProps) {
//   return (
//     <Layout>
//       <h1>About</h1>
//       <p>{from} 에서 실행이 되었어요~!</p>
//     </Layout>
//   );
// }

// export async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
//   const str = req ? 'server' : 'client';
//   return { props: { from: str } };
// }
