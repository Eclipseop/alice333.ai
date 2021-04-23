import React from "react";
import axios from "axios";
import copy from "clipboard-copy";

interface Props {
	url: string;
	onChange(url: string): void;
}

const Entry: React.FC<Props> = (props) => {
	const click = async (url: string) => {
		try {
			console.log(`Submitting ${url}`);
			const res = (await axios.post("/api/url?url=" + url)).data;
			navigator.clipboard.writeText(res.url);
			copy(url);
			alert(res.url);
		} catch (err) {
			console.log(err);
		}
	};

	const simulateClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			click(props.url);
		}
	};

	return (
		<div className="flex mx-auto gap-1">
			<input
				type="text"
				value={props.url}
				autoComplete="off"
				autoCapitalize="off"
				autoCorrect="off"
				className="rounded w-50 border-2"
				onChange={(event) => props.onChange(event.target.value)}
				onKeyDown={(e) => simulateClick(e)}
			></input>

			<button
				className="bg-red-300 border-2 border-red-400 rounded p-1"
				onClick={() => click(props.url)}
			>
				Submit
			</button>
		</div>
	);
};

export default Entry;
