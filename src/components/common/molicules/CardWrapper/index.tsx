interface CardWrapperProps {
  children: any;
}
const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <>
      <div className="bg-white drop-shadow-cardShadow p-[26px] rounded-lg">
        {children}
      </div>
    </>
  );
};

export default CardWrapper;
