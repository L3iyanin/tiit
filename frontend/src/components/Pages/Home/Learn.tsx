import React, { useState } from "react";

const Learn: React.FC = () => {
	const [insult, setInsult] = useState("");

	function updateInsult(e: React.ChangeEvent<HTMLInputElement>) {
		setInsult(() => e.target.value);
	}

	function addInsult(e: React.MouseEvent) {
		//api
	}

	return (
		<section className="flex flex-col items-center gap-3 px-5 pt-6">
			<h1 className="text-base font-bold text-primary text-center">Did TiiT miss any insult?</h1>
			<input
				type="text"
				placeholder="add it here so it can learn"
				className="text-[#8181A2] text-xs font-medium border border-primary rounded w-full px-3 py-2"
				value={insult}
				onChange={updateInsult}
			/>
			<button className="text-xs text-white font-medium rounded bg-primary px-9 py-2" onClick={addInsult}>
				Add insult
			</button>
		</section>
	);
};

export default Learn;
