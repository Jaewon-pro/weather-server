import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';

async function fetchUpdatedContent() {
  const fileContent = await fs.readFile('data.json', 'utf8');
  return JSON.parse(fileContent);
}

export default async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
  try {
    const updatedContent = await fetchUpdatedContent();
    res.status(200).json({ content: updatedContent });
  } catch (error) {
    res.status(400).json({ error: 'Unable to fetch content' });
  }
}
