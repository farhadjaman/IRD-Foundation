interface PageTitleProps {
  children: string;
}
const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <>
      <div className="bg-white drop-shadow-cardShadow py-5 px-6 rounded-lg mb-3">
        <h2 className="text-xl text-textGray font-rubik font-semibold leading-[1.2] capitalize">
          {children}
        </h2>
      </div>
    </>
  );
};

export default PageTitle;
