'use client';
import SearchIcon from '../../icons/Search.icon';
import DuasImportance from '../../icons/Duas/DuasImportance.icon';
import Subcatagories from './Subcatagories';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Category } from '@/types/duas.types';
import { setCatagoryId } from '@/redux/features/common/commonSlice';
import { useGetDuasByCatagoryQuery } from '@/redux/features/common/commonApi';

const Catagories = () => {
  const { catagoryId } = useAppSelector((state) => state.common);
  const { data, isLoading, isError } = useGetDuasByCatagoryQuery(catagoryId);
  const dispatch = useAppDispatch();

  const handleChangeCatagory = (id: number) => () => {
    dispatch(setCatagoryId({ id }));
  };
  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (isError) content = <div>Error...</div>;
  else if (data) {
    content = data['categories'].map((catagory: Category, index: number) => (
      <div key={index} className="flex flex-col">
        <div
          onClick={handleChangeCatagory(catagory.cat_id)}
          className={`${
            catagory.cat_id === catagoryId ? 'bg-secondary' : 'bg-white'
          } rounded-lg flex items-center justify-between hover:cursor-pointer`}
        >
          <div className="flex items-center gap-2 ">
            <div
              className={`m-2 p-2 rounded-md ${
                catagory.cat_id === catagoryId ? 'bg-white' : 'bg-secondary'
              }`}
            >
              <DuasImportance />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-sm font-semibold">{catagory.cat_name_en}</h1>
              <p className="text-xs font-medium text-textGray">
                Subcategory: {catagory.no_of_subcat}
              </p>
            </div>
          </div>
          <div className="flex-col justify-between px-2 border-l-2 border-l-GrayLight">
            <p className="text-lg font-medium mx-auto">{catagory.no_of_dua}</p>
            <p className="text-xs text-textGray">Duas</p>
          </div>
        </div>
        {catagory.cat_id === catagoryId && (
          <Subcatagories subcatagories={data['subcategories']} duas={data['duas']} />
        )}
      </div>
    ));
  }
  const Searchbar = ({ title }: { title: string }) => (
    <div className="mx-2 max-w-full relative text-gray-600 mb-4">
      <input
        className="h-12 w-full w-42 rounded-lg px-2 text-md focus:outline-none border-[1px] drop-shadow-sm border-gray-300 focus:border-primary"
        type="search"
        name="cataogrySearch"
        placeholder={title}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-1 mr-1 p-2 px-4 bg-white rounded-md"
      >
        <SearchIcon />
      </button>
    </div>
  );
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className=" bg-primary flex py-4 justify-center mb-4">
        <p className="text-lg text-white">Catagories</p>
      </div>
      <Searchbar title="Search Catagories" />
      <div className="flex flex-col px-3 gap-2 h-[calc(80vh-105px)] 2xl:h-[calc(80vh-110px)] scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-md scrollbar-track-transparent overflow-y-scroll">
        {/* catagories */}
        {content}
        {/* subcatagories */}
      </div>
    </div>
  );
};

export default Catagories;
