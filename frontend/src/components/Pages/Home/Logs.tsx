import { useEffect, useState } from "react";
import Message from "./Message";
import { CenteredLoadingSpinner } from "../../UI/Loading/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { fakeMessages } from "../../../data/messages";
import { removeMessage, setMessages } from "../../../reducers/MessagesSlice";

const Logs = () => {

	const messages: IMessage[] | null = useSelector((state: any) => state.messages.messages);

	const dispatch = useDispatch();

	useEffect(() => {
		if (fakeMessages) {
			dispatch(setMessages(fakeMessages));
		}
	}, []);

	const onMessageItsOkayHandler = (id: string) => {
		console.log(id);
		dispatch(removeMessage(id));
	};
	
	const onMessageItsInsultHandler = (id: string) => {
		console.log(id);
		dispatch(removeMessage(id));
	};

	if (!messages) return <CenteredLoadingSpinner />;

	return (
		<section className="px-5">
			<h1 className="text-base font-bold text-primary text-center my-4">Deleted messages:</h1>
			<div className="flex flex-col gap-3 pb-7">
				{messages.map((msg, index) => (
					<Message
						key={index}
						msg={msg}
						onMessageItsOkayHandler={onMessageItsOkayHandler}
						onMessageItsInsultHandler={onMessageItsInsultHandler}
						/>
				))}
			</div>
		</section>
	);
};

export default Logs;
