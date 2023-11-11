'use client';
import DuaArrowIcon from '@/components/icons/Duas/DuaArrow.icon';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Dua, Subcategory } from '@/types/duas.types';
import { setDuaId, setSubcatagoryId } from '@/redux/features/common/commonSlice';

function Subcatagories({ subcatagories, duas }: { subcatagories: Subcategory[]; duas: Dua[] }) {
  const dispatch = useAppDispatch();
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
                  onClick={() => dispatch(setSubcatagoryId({ id: subcatagory.subcat_id }))}
                  className={`${
                    subcatagory.subcat_id === subcatagoryId ? 'text-primary' : 'text-gray-700'
                  } cursor-pointer font-semibold text-sm mb-4`}
                >
                  {subcatagory.subcat_name_en}
                </p>
                {subcatagory.subcat_id === subcatagoryId && (
                  <div className="flex flex-col gap-4">
                    {duas
                      .filter((dua) => dua.subcat_id === subcatagory.subcat_id)
                      .map((dua: Dua, index: number) => (
                        <div key={index} className="cursor-pointer">
                          <div className="flex items-center gap-1">
                            <DuaArrowIcon />
                            <p
                              onClick={() => dispatch(setDuaId({ id: dua.dua_id }))}
                              className={`${
                                dua.dua_id === duaId ? 'text-primary' : 'text-gray-500'
                              } text-sm font-semibold px-2`}
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
      </div>
    </div>
  );
}

export default Subcatagories;
