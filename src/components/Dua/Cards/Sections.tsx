'use client';
import Section from '@/components/Dua/Cards/Section';
import { usePathname, useSearchParams } from 'next/navigation';
import { useGetDuasByCatagoryQuery } from '@/redux/features/common/commonApi';
import { useEffect } from 'react';

const Cards = () => {
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
    content = data['subcategories'].map((subcatagory: Object, index: any) => (
      <Section key={index} subcatagory={subcatagory} duas={data['duas']} />
    ));
  }
  return (
    <div className="row-span-full pr-4 scrollbar scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md scrollbar-track-transparent w-full h-[calc(100vh-100px)] col-start-2 pb-6 overflow-y-scroll">
      {content}
    </div>
  );
};

export default Cards;
