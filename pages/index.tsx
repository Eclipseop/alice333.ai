import React, { useState } from "react";
import Entry from "../components/Entry";
import Head from "next/head";

const index: React.FC = () => {
	const [url, setUrl] = useState("");

	return (
		<div>
			<Head>
				<title>Alice333.ai</title>
				<meta name="og:title" content="Alice333.ai" key="title"></meta>
			</Head>
			<div className="min-h-screen bg-pink-300">
				<div className="flex flex-col">
					<h1 className="text-4xl mx-auto text-white mb-1">
						Alice333.ai
					</h1>
					<Entry url={url} onChange={setUrl} />
				</div>
			</div>
		</div>
	);
};

export default index;
