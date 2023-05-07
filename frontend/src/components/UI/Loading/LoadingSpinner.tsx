import styles from "./LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
	return (
		<div>
			<div className={styles["lds-ripple"]}>
				<div />
				<div />
			</div>
		</div>
	);
};

export default LoadingSpinner;


export const CenteredLoadingSpinner: React.FC = () => {
	return (
		<div className="flex items-center flex-col">
			<LoadingSpinner />
			{/* <span className="text-primary italic font-semibold text-center">{LoadingQuote.quote}</span> */}
		</div>
	);
}