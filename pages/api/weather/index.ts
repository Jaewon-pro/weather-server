import type { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../app/lib/prisma";

// export const getServerSideProps: GetServerSideProps = async () => {
//     let data = await prisma.weather.aggregate({
//         _max: {
//             recordedAt: true
//         }
//     });
//     return {
//         props: {data},
//     }
// }

export default function Weather(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: 'Hello' });
}
