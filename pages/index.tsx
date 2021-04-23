import React, { useState } from "react";
import Entry from "../components/Entry";

const index: React.FC = () => {
	const [url, setUrl] = useState("");

	return (
		<div className="min-h-screen bg-pink-300">
			<div className="flex flex-col">
				<h1 className="text-4xl mx-auto text-white mb-1">
					Alice333.ai
				</h1>
				<Entry url={url} onChange={setUrl} />
			</div>
		</div>
	);
};

export default index;
