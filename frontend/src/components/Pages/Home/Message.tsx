import React from "react";

interface IMessageProps {
	msg: string;
}

const Message: React.FC<IMessageProps> = ({ msg }) => {
	return (
		<article className="rounded-lg bg-[#F9FBFC] pt-3 flex flex-col gap-3">
			<p className="text-xs font-medium text-black text-center">{msg}</p>
			<div className="w-full flex items-center text-xs font-medium">
				<button className="rounded-bl-lg text-red hover:text-white hover:bg-red w-1/2 text-center py-1 border border-red">
					it’s insult
				</button>
				<button className="rounded-br-lg text-primary hover:text-white hover:bg-primary w-1/2 text-center py-1 border border-primary">
					it’s okay
				</button>
			</div>
		</article>
	);
};

export default Message;
