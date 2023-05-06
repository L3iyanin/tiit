import React from "react";

interface IStepProps {
	index: number;
	Illustartion: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	text: string;
}

const Step: React.FC<IStepProps> = ({index, Illustartion, text}) => {
	return (
		<article>
			<h2 className="text-xs font-bold text-white bg-primary rounded">1</h2>
			<Illustartion />
			<p>{text}</p>
		</article>
	);
};

export default Step;
