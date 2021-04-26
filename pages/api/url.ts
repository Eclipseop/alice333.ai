import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';
import { nanoid } from 'nanoid';

const connectionString = 'postgresql://db:wkbk5qd6fzk78kwm@app-f6cdc796-9f88-4f91-ae7f-412f02bebaa1-do-user-7621143-0.b.db.ondigitalocean.com:25060/db?sslmode=require';
const pool = new Pool({ connectionString });

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await pool.connect();
    try {
        const { url } = req.query;
        let { uid } = req.query;

        if (typeof url !== 'string' || typeof uid !== 'string') {
            return;
        }

        if (!uid || uid === '') {
            console.log('no uid provided');
            uid = nanoid(6);
        }
        console.log(uid);
        // const randUid = nanoid(6);

        const uidCheck = await client.query('SELECT * FROM urls WHERE uid = ($1)', [uid]);
        if (uidCheck.rowCount > 0) {
            res.status(400).send('UID already in system :/');
            return;
        }

        const cache = await client.query(
            'SELECT * FROM URLS WHERE URL = ($1)',
            [url],
        );

        if (cache.rowCount > 0) {
            res.json({
                url: `https://alice333.ai/api/${cache.rows[0].uid}`,
            });
            return;
        }

        client.query('INSERT INTO urls(url, uid, clicks) VALUES($1, $2, $3)', [
            url,
            uid,
            0,
        ]);

        res.json({ url: `https://alice333.ai/api/${uid}` });
    } finally {
        client.release();
    }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(400).send('Invalid HTTP Methods');
        return;
    }
    handlePost(req, res);
};
