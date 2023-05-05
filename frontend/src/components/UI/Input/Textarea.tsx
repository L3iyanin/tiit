
const Textarea: React.FC<{
	placeholder: string;
	type: string;
	name?: string;
	className?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	label?: string;
}> = ({
	placeholder,
	type,
	name,
	className,
	value,
	onChange,
	label,
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
			<textarea
				name={name}
				className={`min-w-[368px] border border-black rounded-lg pl-4 py-2 focus:outline-none ${className}`}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Textarea;