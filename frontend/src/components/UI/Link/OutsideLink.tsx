

const OutsideLink:React.FC<{
	link: string;
	children: string | JSX.Element | JSX.Element[];
	className?: string;
}> = (props) => {
	const { link, children, className } = props;
	return (
		<a href={link} target="_blank" rel="noopener noreferrer" className={`underline font-medium ${className}`}>
			{children}
		</a>
	);
}

export default OutsideLink;