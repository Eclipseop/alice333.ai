import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
import { nanoid } from "nanoid";

const connectionString =
	"postgresql://db:wkbk5qd6fzk78kwm@app-f6cdc796-9f88-4f91-ae7f-412f02bebaa1-do-user-7621143-0.b.db.ondigitalocean.com:25060/db?sslmode=require";
const pool = new Pool({ connectionString });

const regex = new RegExp(
	/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
);

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await pool.connect();
	try {
		const uid = nanoid(6);
		const url = req.query.url;

		if (typeof url != "string") {
			return;
		}

		if (!url.match(regex)) {
			res.status(400).send("Not a valid URL.");
			return;
		}

		const cache = await client.query(
			"SELECT * FROM URLS WHERE URL = ($1)",
			[url]
		);

		if (cache.rowCount > 0) {
			res.json({
				url: "https://alice333.ai/api/test" + cache.rows[0].uid,
			});
			return;
		}

		client.query("INSERT INTO urls(url, uid) VALUES($1, $2)", [url, uid]);
		res.json({ url: "https://alice333.ai/api/test" + uid });
	} finally {
		client.release();
	}
};

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await pool.connect();
	try {
		const data = await client.query("SELECT * from URLS where UID = ($1)", [
			req.query.uid,
		]);
		const url = data.rows[0].url;

		res.redirect(url);
	} catch {
		res.status(404).send("");
	} finally {
	}
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method == "GET") {
		handleGet(req, res);
	} else {
		handlePost(req, res);
	}
};
