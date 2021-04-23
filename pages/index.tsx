import React, { useState } from "react";
import Entry from "../components/Entry";
import Head from "next/head";

const index: React.FC = () => {
	const [url, setUrl] = useState("");

	return (
		<div>
			<Head>
				<title>Alice333.ai</title>
				<meta
					name="og:title"
					content="Alice333.ai"
					key="ogtitle"
				></meta>
				<meta
					name="og:description"
					content="artificial intelligence music generator. アリスの目を通して世界を見る 𝒸₈: lnₑπ(1,1/0,0)²"
					key="ogdesc"
				></meta>
				<meta name="theme-color" content="#ff82ee"></meta>
			</Head>
			<div
				className="min-h-screen"
				style={{
					backgroundImage: "url('/astantine_crop_2.jpg')",
					backgroundPositionX: "center",
				}}
			>
				<div className="flex flex-col">
					<h1
						className="text-4xl m-auto text-white mb-1"
						style={{ marginTop: "50%" }}
					>
						Alice333.ai
					</h1>
					<Entry url={url} onChange={setUrl} />
				</div>
			</div>
		</div>
	);
};

export default index;
