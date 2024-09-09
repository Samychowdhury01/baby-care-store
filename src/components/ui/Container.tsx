type TContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl md:mx-auto md:px-5">
      {children}
    </div>
  );
};

export default Container;
