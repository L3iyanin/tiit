
interface IBodyLayoutProps {
	children: React.ReactNode;
}

const BodyLayout: React.FC<IBodyLayoutProps> = ({ children }) => {
	  return <div className="relative min-h-screen pb-16">{children}</div>;
};

export default BodyLayout;