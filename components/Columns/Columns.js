export const Columns = ({ isStackOnMobile, cssClass, children }) => {
  return <div className="pb-10">
    <div className={`max-w-5x mx-auto ${cssClass} ${isStackOnMobile ? "block md:flex" : "flex"}`}>
        {children}
    </div>
  </div>;
};
