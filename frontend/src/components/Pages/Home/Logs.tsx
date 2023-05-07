import { useEffect, useState } from "react";
import Message from "./Message";
import { CenteredLoadingSpinner } from "../../UI/Loading/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage, setMessages } from "../../../reducers/MessagesSlice";
import { getDeletedMessagesApi, setMessagesIsInsultApi, setMessagesIsOkayApi } from "../../../services/messages";
import { IDeletedMessage } from "../../../../../shared/interfaces/DeletedMessage";
import { SuccessAlertWithMessage } from "../../UI/Alerts/SuccesAlert";

const Logs = () => {

	const messages: IDeletedMessage[] | null = useSelector((state: any) => state.messages.messages);

	const dispatch = useDispatch();

	useEffect(() => {

		getDeletedMessagesApi()
			.then((res) => {
				dispatch(setMessages(res.data.deletedMessages));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onMessageItsOkayHandler = (id: string) => {
		setMessagesIsOkayApi(id)
			.then((res) => {
				SuccessAlertWithMessage(res.data.message)
			})
			.catch((err) => {
				console.log(err);
			});
		dispatch(removeMessage(id));
	};
	
	const onMessageItsInsultHandler = (id: string) => {
		setMessagesIsInsultApi(id)
			.then((res) => {
				SuccessAlertWithMessage(res.data.message)
			})
			.catch((err) => {
				console.log(err);
			});
		dispatch(removeMessage(id));
	};

	if (!messages) return <CenteredLoadingSpinner />;

	return (
		<section className="px-5">
			<h1 className="text-base font-bold text-primary text-center my-4">Deleted messages:</h1>
			<div className="flex flex-col gap-3 pb-1">
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
