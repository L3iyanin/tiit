
interface IBodyLayoutProps {
	children: React.ReactNode;
}

const BodyLayout: React.FC<IBodyLayoutProps> = ({ children }) => {
	  return <div className="relative min-h-screen pb-16 max-w-[540px] m-auto">{children}</div>;
};

export default BodyLayout;