import React from "react";

interface Props {
	url: string;
	onChange(url: string): void;
}

const Entry: React.FC<Props> = (props) => {
	return (
		<div className="mx-auto">
			<input
				type="text"
				value={props.url}
				autoComplete="off"
				autoCapitalize="off"
				autoCorrect="off"
				onChange={(event) => props.onChange(event.target.value)}
			></input>
		</div>
	);
};

export default Entry;
