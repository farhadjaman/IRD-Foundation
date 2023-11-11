import FolderIcon from '@/components/icons/Folder.icon';
import LanguageIcon from '@/components/icons/Languag.icon';
import WidgetIcon from '@/components/icons/Widget.icon';

function settings() {
  return (
    <div className="hidden bg-white mb-12 rounded-xl 2xl:flex 2xl:flex-col gap-y-6 px-4 text-xl  items-center">
      <h1 className="py-8 font-semibold text-gray-700 ">Settings</h1>
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
  );
}

export default settings;
