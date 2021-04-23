import React, { useState } from "react";
import Entry from "../components/Entry";
import Head from "next/head";
import Image from "next/image";

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
				<Image
					src="/jason2_Transparent.png"
					alt="bg image of alice"
					width={1900}
					height={2500}
					className="opacity-50"
				/>
			</div>
		</div>
	);
};

export default index;
