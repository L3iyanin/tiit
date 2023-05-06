import React from "react";

interface IStepProps {
	index: number;
	Illustartion: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	text: string;
}

const Step: React.FC<IStepProps> = ({index, Illustartion, text}) => {
	return (
		<article className="flex flex-col items-center gap-4">
			<h2 className="text-xs font-bold text-white bg-primary rounded px-2 py-1 ">1</h2>
			<Illustartion />
			<p className="text-xs text-primary">{text}</p>
		</article>
	);
};

export default Step;
