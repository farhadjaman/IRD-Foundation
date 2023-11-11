import DuaCardIcon from '@/components/icons/DuaCard.icon';
import PlayIcon from '@/components/icons/Play.icon';
import CopyIcon from '@/components/icons/Copy.icon';
import BookmarkIcon from '@/components/icons/Bookmark.icon';
import MemorizeIcon from '@/components/icons/Memorize.icon';
import ShareIcon from '@/components/icons/Share.icon';
import ReportIcon from '@/components/icons/Report.icon';
import { Category, Dua, Subcategory } from '@/types/duas.types';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

const Section = ({
  subcatagory,
  duas,
  id,
}: {
  subcatagory: Subcategory;
  duas: Dua[];
  id: string;
}) => {
  const { duaId } = useAppSelector((state) => state.common);
  useEffect(() => {
    const specificItemRef = document.getElementById(`${duaId}`);
    if (specificItemRef) {
      specificItemRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [duaId]);
  return (
    <div id={id}>
      <div className="flex mb-5 flex-row bg-white rounded-xl px-5 py-4 justify-start items-center">
        <p className="text-title font-medium">
          <span className="text-primary font-medium ">Section: </span>
          {subcatagory?.subcat_name_en}
        </p>
      </div>
      <div className="flex flex-col">
        {duas &&
          duas
            .filter((dua) => dua.subcat_id === subcatagory.subcat_id)
            .map((dua, index) => (
              <div id={`${dua.dua_id}`} key={index} className=" bg-white rounded-3xl mb-5">
                <div className="p-6 pb-3">
                  <div className="flex flex-row gap-2 justify-start items-center ">
                    <DuaCardIcon />
                    <p className="text-primary text-sm font-semibold">
                      {dua.id}: {dua.dua_name_en}
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 justify-start items-start text-[18px] font-semibold text-gray-500">
                    <div className="w-full ">
                      <p className="mt-5 font-semibold text-justify leading-8 ">{dua.top_en}</p>
                      <p className="mt-5 font-semibold text-justify leading-8 ">{dua.dua_arabic}</p>
                      <p className="mt-5 font-medium text-justify leading-8 ">
                        {dua.translation_bn}
                      </p>
                      <p className="mt-5 font-semibold text-justify leading-8 ">{dua.bottom_en}</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className=" text-primary">Reference:</p>
                      <p>{dua.refference_en}</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between pt-6">
                    <PlayIcon />
                    <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
                      <CopyIcon />
                      <BookmarkIcon />
                      <MemorizeIcon />
                      <ShareIcon />
                      <ReportIcon />
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Section;
