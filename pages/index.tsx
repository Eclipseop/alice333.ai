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
					overflow: "hidden",
				}}
			>
				<div>
					<div
						className="flex flex-col bg-white w-auto rounded p-2"
						style={{
							top: "45%",
							left: "25%",
							position: "absolute",
							paddingBottom: "10px",
							alignItems: "center",
						}}
					>
						<h1 className="text-4xl m-auto text-red-300 mb-1">
							Alice333.ai
						</h1>
						<Entry url={url} onChange={setUrl} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
