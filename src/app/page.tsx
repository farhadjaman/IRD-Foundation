import Header from '@/components/Dua/header';
import Sidebar from '@/components/Dua/sidebar';
import FolderIcon from '@/components/icons/Folder.icon';
import LanguageIcon from '@/components/icons/Languag.icon';
import WidgetIcon from '@/components/icons/Widget.icon';

export default function Home() {
  return (
    <div className="font-manrope bg-orange-200 p-6">
      <div className="relative z-0 grid gap-6 grid-rows-[46px,1fr] grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,300px]">
        <Sidebar />
        <Header />
        <div className="w-full grid grid-cols-[350px,1fr] gap-6 col-span-2 mx-auto">
          <div className="bg-white h-[85.5vh] overflow-hidden rounded-2xl flex flex-col">
            <div className=" bg-primary flex py-4 justify-center">
              <p className="text-lg text-white">Catagories</p>
            </div>
          </div>
          <div className="bg-white w-full pb-6 pt-24 col-start-2 rounded-3xl"></div>
        </div>
        <div className="bg-white rounded-3xl flex flex-col gap-y-6 px-4 text-xl items-center">
          <h1 className="py-8 ">Settings</h1>
          <div className="flex flex-col gap-y-5 pb-4 rounded-md w-full border-[1px] border-gray-200">
            <div className="w-full flex gap-x-4 px-4 items-center justify-start h-14 rounded-md bg-grayLight text-textGray border-l-4 border-primary">
              <div className="p-2 rounded-full bg-secondary ">
                <LanguageIcon />
              </div>
              <p className="text-sm font-semibold">Language Settings</p>
            </div>
            <div className="flex gap-2 justify-center">
              <div className="text-white px-4 py-2 bg-primary text-sm font-medium rounded-md">
                English
              </div>
              <div className="px-4 py-2 border-[1px] border-gray-200 text-sm font-medium rounded-md">
                Bangla
              </div>
            </div>
          </div>
          <div className="w-full flex gap-x-4 px-4 items-center justify-start h-14 rounded-md bg-grayLight text-textGray">
            <div className="p-2 rounded-full bg-secondary ">
              <FolderIcon />
            </div>
            <p className="text-sm font-semibold">General Settings</p>
          </div>
          <div className="w-full flex gap-x-4 px-4 items-center justify-start h-14 rounded-md bg-grayLight text-textGray">
            <div className="p-2 rounded-full bg-secondary ">
              <WidgetIcon />
            </div>
            <p className="text-sm font-semibold">Font Settings</p>
          </div>
          <div className="w-full flex gap-x-4 px-4 items-center justify-start h-14 rounded-md bg-grayLight text-textGray">
            <div className="p-2 rounded-full bg-secondary ">
              <WidgetIcon />
            </div>
            <p className="text-sm font-semibold">Appearance Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
