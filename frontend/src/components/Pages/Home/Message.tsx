import React from "react";

interface IMessageProps {
	msg: IMessage;
	onMessageItsOkayHandler: (id: string) => void;
	onMessageItsInsultHandler: (id: string) => void;
}

const Message: React.FC<IMessageProps> = ({
	msg,
	onMessageItsOkayHandler,
	onMessageItsInsultHandler,
}) => {
	return (
		<article className="">
			<p className="text-xs font-medium text-black text-center px-6 py-3 rounded-t-lg border border-b-0 border-black ">
				{msg.content}
			</p>
			<div className="w-full flex items-center text-xs font-medium">
				<button
					className="rounded-bl-lg text-red hover:text-white hover:bg-red w-1/2 text-center py-1 border border-red"
					onClick={onMessageItsInsultHandler.bind(null, msg.id)}
				>
					it's insult
				</button>
				<button
					className="rounded-br-lg text-primary hover:text-white hover:bg-primary w-1/2 text-center py-1 border border-primary"
					onClick={onMessageItsOkayHandler.bind(null, msg.id)}
					>
					it's okay
				</button>
			</div>
		</article>
	);
};

export default Message;
