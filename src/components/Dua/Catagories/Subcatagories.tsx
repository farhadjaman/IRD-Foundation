'use client';
import DuaArrowIcon from '@/components/icons/Duas/DuaArrow.icon';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dua, Subcategory } from '@/types/duas.types';

function Subcatagories({ subcatagories, duas }: { subcatagories: Subcategory[]; duas: Dua[] }) {
  const { catagoryId, subcatagoryId, duaId } = useAppSelector((state) => state.common);
  return (
    <div className="ml-12 border-dotted border-l-2 my-2 border-primary">
      <div className="flex flex-col gap-y-2 ml-3 ">
        {subcatagories
          .filter((subcatagory: Subcategory) => subcatagory.cat_id === catagoryId)
          .map((subcatagory: Subcategory, index: number) => (
            <div key={index} className="flex my-2">
              <div className="bg-primary -translate-x-4 mt-2 w-1 h-1 rounded-full"></div>
              <div className="flex flex-col">
                <p
                  className={`${
                    subcatagory.subcat_id === subcatagoryId ? 'text-primary' : 'text-gray-600'
                  } cursor-pointer font-semibold text-sm`}
                >
                  {subcatagory.subcat_name_en}
                </p>
                {subcatagory.subcat_id === subcatagoryId && (
                  <div className="flex flex-col">
                    {duas
                      .filter((dua) => dua.subcat_id === subcatagory.subcat_id)
                      .map((dua: Dua, index: number) => (
                        <div key={index} className="mt-2 cursor-pointer">
                          <div className="flex items-center gap-1">
                            <DuaArrowIcon />
                            <p
                              className={`${
                                dua.dua_id === duaId ? 'text-primary' : 'text-textGray'
                              } text-xs font-medium  px-2`}
                            >
                              {dua.dua_name_en}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        {/* <div className="flex my-2">
          <div className="bg-primary -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
              Morning &amp; Evening Adhkar
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Subcatagories;
