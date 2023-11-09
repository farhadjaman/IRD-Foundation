import DuaCardIcon from '@/components/icons/DuaCard.icon';
import PlayIcon from '@/components/icons/Play.icon';
import CopyIcon from '@/components/icons/Copy.icon';
import BookmarkIcon from '@/components/icons/Bookmark.icon';
import MemorizeIcon from '@/components/icons/Memorize.icon';
import ShareIcon from '@/components/icons/Share.icon';
import ReportIcon from '@/components/icons/Report.icon';

const Section = () => {
  return (
    <div>
      <div className="flex mb-5 flex-row bg-white rounded-xl px-5 py-4 justify-start items-center">
        <p className="text-title font-medium">
          <span className="text-primary font-medium ">Section: </span>
          The servant is dependent on his Lord
        </p>
      </div>
      <div className="flex flex-col">
        <div className=" bg-white rounded-3xl mb-5">
          <div className="p-6 pb-3">
            <div className="flex flex-row gap-2 justify-start items-center ">
              <DuaCardIcon />
              <p className="text-primary text-sm font-semibold">
                1. The servant is dependent on his Lord #1
              </p>
            </div>
            <div className="flex flex-col gap-5 justify-start items-start text-[18px] font-semibold text-gray-500">
              <div className="w-full ">
                <p className="mt-5 font-semibold text-justify leading-8 ">
                  All human beings depend on Allah for their welfare and prevention of evil in
                  various matters of their religion and world. Allah says (interpretation of the
                  meaning): O mankind, you are those in need of Allah, while Allah is the Free of
                  need, the Praiseworthy.
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <p className=" text-primary">Reference:</p>
                <p>Surah Al-Fatir 35:15</p>
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
      </div>
    </div>
  );
};

export default Section;
