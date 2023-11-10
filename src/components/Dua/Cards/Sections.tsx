'use client';
import Section from '@/components/Dua/Cards/Section';
import { usePathname, useSearchParams } from 'next/navigation';
import { useGetDuasByCatagoryQuery } from '@/redux/features/common/commonApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Category, Dua, Subcategory } from '@/types/duas.types';
import { useEffect, useRef } from 'react';

const Cards = () => {
  const { catagoryId, subcatagoryId, duaId } = useAppSelector((state) => state.common);
  const { data, isLoading, isError, refetch } = useGetDuasByCatagoryQuery(catagoryId);

  useEffect(() => {
    const specificItemRef = document.getElementById(`section ${subcatagoryId}`);
    if (specificItemRef) {
      specificItemRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [subcatagoryId]);

  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (isError) content = <div>Error...</div>;
  else if (data) {
    content = data['subcategories'].map((subcatagory: Subcategory, index: number) => (
      <Section
        id={`section ${subcatagory.subcat_id}`}
        key={index}
        subcatagory={subcatagory}
        duas={data['duas']}
      />
    ));
  }
  return (
    <div className="row-span-full pr-4 scrollbar scrollbar-thumb-gray-500 scrollbar-thumb-rounded-md scrollbar-track-transparent w-full h-[calc(100vh-100px)] col-start-2 pb-6 overflow-y-scroll">
      {content}
    </div>
  );
};

export default Cards;
