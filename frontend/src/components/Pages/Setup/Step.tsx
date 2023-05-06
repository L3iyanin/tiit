import React from "react";
import ClipBoardField from "./ClipBoardField";

interface IStepProps {
	index: number;
	Illustartion: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	text: string;
	attachement: string;
}

const Step: React.FC<IStepProps> = ({ index, Illustartion, text, attachement }) => {
	return (
		<article className="flex flex-col items-center gap-4">
			<h2 className="text-xs font-bold text-white bg-primary rounded px-2 py-1 ">{index}</h2>
			<Illustartion />
			<div className="flex flex-col gap-2 items-center">
				<p className="text-xs text-primary font-medium text-center max-w-[250px]">{text}</p>
				{attachement && <ClipBoardField text={attachement} />}
			</div>
		</article>
	);
};

export default Step;
