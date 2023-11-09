import Section from './Section';
const Cards = () => {
  return (
    <div className="row-span-full pr-4 scrollbar scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md scrollbar-track-transparent w-full h-[calc(100vh-100px)] col-start-2 pb-6 overflow-y-scroll">
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default Cards;
