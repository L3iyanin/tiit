const Input: React.FC<{
	placeholder: string;
	type: string;
	name?: string;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	disabled?: boolean;
}> = ({
	placeholder,
	type,
	name,
	className,
	value,
	onChange,
	label,
	disabled,
}) => {
	return (
		<div className="flex flex-col">
			{label && (
				<label
					htmlFor={name}
					className="text-lg font-medium mb-2"
				>
					{label} :
				</label>
			)}
			<input
				type={type}
				name={name}
				className={`min-w-[368px] disabled:bg-grey border border-black rounded-lg pl-4 py-2 focus:outline-none ${className}`}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
		</div>
	);
};

export default Input;
