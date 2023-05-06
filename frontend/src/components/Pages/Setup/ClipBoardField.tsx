import React from "react";

import { ReactComponent as CopyIcon } from "../../../assets/icons/CopyIcon.svg";
import { toast } from "react-toastify";

interface IClipBoardFieldProps {
	text: string;
}

const ClipBoardField: React.FC<IClipBoardFieldProps> = ({ text }) => {
	console.log(text);

	function copyText(text: string) {
		navigator.clipboard
			.writeText(text)
			.then((val) => toast.success("text copied successfully"))
			.catch((err) => toast.success("failed to copy text", err));
	}

	return (
		<div className="flex rounded border border-primary justify-between items-center">
			<p className="text-xs font-bold text-primary py-1 pl-4 pr-7">{text}</p>
			<div className="flex items-center justify-center bg-primary p-2" onClick={() => copyText(text)}>
				<CopyIcon className="w-3 h-3"/>
			</div>
		</div>
	);
};

export default ClipBoardField;
