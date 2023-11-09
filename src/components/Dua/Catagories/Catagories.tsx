'use client';
import SearchIcon from '../../icons/Search.icon';
import DuasImportance from '../../icons/Duas/DuasImportance.icon';
import Subcatagories from './Subcatagories';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useGetDuasByCatagoryQuery } from '@/redux/features/common/commonApi';

const Catagories = () => {
  const pathname = usePathname();
  const catagoryId = Number(pathname.split('/')[2]);
  const { data, isLoading, isError, refetch } = useGetDuasByCatagoryQuery(catagoryId);

  useEffect(() => {
    refetch();
  }, [pathname]);

  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (isError) content = <div>Error...</div>;
  else if (data) {
    console.log(data['categories']);
    content = data['categories'].map((catagory: Object, index: any) => (
      <div key={index} className="flex flex-col">
        <div
          className={`${
            catagory.cat_id === catagoryId ? 'bg-secondary' : 'bg-white'
          } rounded-lg flex items-center justify-between`}
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
    <div className="bg-white mb-12  rounded-2xl">
      <div className=" bg-primary flex py-4 justify-center mb-4">
        <p className="text-lg text-white">Catagories</p>
      </div>
      <Searchbar title="Search Catagories" />
      <div className=" h-[84vh] flex flex-col px-3 gap-2 scrollbar scrollbar-thumb-white scrollbar-thumb-rounded-md scrollbar-track-transparent overflow-y-scroll">
        {/* catagories */}
        {content}
        {/* subcatagories */}
      </div>
    </div>
  );
};

export default Catagories;
