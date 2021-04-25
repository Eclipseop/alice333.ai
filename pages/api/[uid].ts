import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const connectionString = 'postgresql://db:wkbk5qd6fzk78kwm@app-f6cdc796-9f88-4f91-ae7f-412f02bebaa1-do-user-7621143-0.b.db.ondigitalocean.com:25060/db?sslmode=require';
const pool = new Pool({ connectionString });

const regex = new RegExp(
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi,
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(400).send('Invalid HTTP Methods');
    return;
  }

  const client = await pool.connect();
  try {
    const data = await client.query('SELECT * from URLS where UID = ($1)', [
      req.query.uid,
    ]);
    const content = data.rows[0].url;

    client.query('UPDATE urls SET clicks = clicks + 1 WHERE UID = ($1)', [
      req.query.uid,
    ]);

    if (!content.match(regex)) {
      res.status(300).send(content);
      return;
    }
    res.redirect(content);
  } catch {
    res.status(404).send('');
  } finally {
    client.release();
  }
};
