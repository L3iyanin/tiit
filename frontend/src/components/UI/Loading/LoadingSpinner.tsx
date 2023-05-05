import "./LoadingSpinner.scss";

const LoadingSpinner: React.FC = () => {
	return (
		<div>
			<div className="lds-ripple">
				<div />
				<div />
			</div>
		</div>
	);
};

export default LoadingSpinner;


export const CenteredLoadingSpinner: React.FC = () => {
	return (
		<div className="flex justify-center mt-10">
			<LoadingSpinner />
		</div>
	);
}