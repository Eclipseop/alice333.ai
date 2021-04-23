import React from "react";
import axios from "axios";

interface Props {
	url: string;
	onChange(url: string): void;
}

const Entry: React.FC<Props> = (props) => {
	const click = async (url: string) => {
		console.log(`Submitting ${url}`);
		const res = (await axios.post("/api/url?url=" + url)).data;
		alert(res.url);
	};

	return (
		<div className="flex mx-auto gap-1">
			<input
				type="text"
				value={props.url}
				autoComplete="off"
				autoCapitalize="off"
				autoCorrect="off"
				className="rounded w-50"
				onChange={(event) => props.onChange(event.target.value)}
			></input>

			<button
				className="bg-white rounded p-1"
				onClick={() => click(props.url)}
			>
				Submit
			</button>
		</div>
	);
};

export default Entry;
