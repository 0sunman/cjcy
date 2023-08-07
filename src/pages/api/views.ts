// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sql,db,createClient } from '@vercel/postgres';


type Data = {
  result?: object,
  error?: unknown
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = createClient();
  await client.connect();
  try{
    const result = await sql`UPDATE cjcytest SET CNT=CNT+1 WHERE NAME = 'views';`
    return res.status(200).json({result});
  }catch(error){
    return res.status(500).json({error});
  }finally{
    await client.end();
  }
}



