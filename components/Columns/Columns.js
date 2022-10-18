export const Columns = ({ isStackOnMobile, children }) => {
  return <div className="my-10">
    <div className={`max-w-5x mx-auto ${isStackOnMobile ? "block md:flex" : "flex"}`}>
        {children}
    </div>
  </div>;
};
