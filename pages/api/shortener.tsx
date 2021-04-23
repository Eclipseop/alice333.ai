import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
import { nanoid } from "nanoid";

const connectionString = "";
const pool = new Pool({ connectionString });

const regex = new RegExp(
	/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		res.status(400).send("");
		return;
	}

	const client = await pool.connect();
	try {
		const uid = nanoid(6);
		const url = req.query.url;

		if (!url.match(regex)) {(
			res.status(400).send("Not a valid URL.");
			return;
		}

    const cache = await client.query("SELECT * FROM URLS WHERE URL = ($1)", url);
    if (cache.rowCount > 0) {
      res.json({url: "https://alice333.ai/api/test" + cache.rows[0].uid});
      return;
    }

    await client.query("INSERT INTO urls(url, uid) VALUES($1, $2)", url, uid);
    res.json({url: "https://alice333.ai/api/test" + uid})

	} finally {
		client.release();
	}
};

/*
export default function personHandler({ query: { id } }, res) {
  const filtered = people.filter((p) => p.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
*/
