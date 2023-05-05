const Button: React.FC<{
	className?: string;
	onClick?: () => void;
	icon?: JSX.Element;
	iconOnLeft?: boolean;
	label: string;
	labelClassName?: string;
}> = ({
	className = "",
	onClick = () => {},
	icon,
	iconOnLeft = true,
	label,
	labelClassName = "",
}) => {
	return (
		<button
			className={`bg-black btn-shadow md:min-w-[144px] rounded-lg text-beige px-5 py-2 flex items-center justify-center gap-2 ${className}`}
			onClick={onClick}
		>
			{iconOnLeft && icon}
			<span className={labelClassName}>{label}</span>
			{!iconOnLeft && icon}
		</button>
	);
};

export default Button;
