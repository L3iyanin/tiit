import React, { useState } from "react";
import Message from "./Message";

const Logs = () => {
	const [messages, setMessages] = useState(new Array(10).fill("Lorem Ipsum has been the industry's standard."));

	console.log(messages);

	return (
		<section className="px-5">
			<h1 className="text-base font-bold text-primary text-center my-4">Deleted messages:</h1>
			<div className="flex flex-col gap-3">
				{messages.map((msg) => (
					<Message msg={msg} />
				))}
			</div>
		</section>
	);
};

export default Logs;
