import HomeIcon from '@/components/icons/Home.icon';
import DonateIcon from '@/components/icons/Donate.icon';
import WidgetIcon from '@/components/icons/Widget.icon';
import MemorizeIcon from '@/components/icons/Memorize.icon';
import BookmarkIcon from '@/components/icons/Bookmark.icon';
import ChatIcon from '@/components/icons/Chat.icon';
import JarIcon from '@/components/icons/Jar.icon';
import BookIcon from '@/components/icons/Book.icon';

export default function Sidebar() {
  return (
    <div className="row-span-full">
      <div className="w-[100px] gap-y-5 fixed overflow-hidden">
        <div className="bg-white flex flex-col justify-between items-center rounded-3xl px-2 lg:h-[93vh] pb-16 pt-8">
          <div className="w-full">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="p-3 bg-secondary mx-auto rounded-full">
              <HomeIcon />
            </div>
            <div className="p-3 bg-secondary mx-auto rounded-full">
              <WidgetIcon />
            </div>
            <div className="p-3 bg-secondary mx-auto rounded-full">
              <MemorizeIcon />
            </div>
            <div className="p-3 bg-secondary mx-auto rounded-full">
              <BookmarkIcon />
            </div>
            <div className="p-3 bg-secondary mx-auto rounded-full">
              <JarIcon />
            </div>
            <div className="p-3 bg-secondary mx-auto rounded-full">
              <ChatIcon />
            </div>
            <div className="p-3 bg-secondary mx-auto rounded-full">
              <BookIcon />
            </div>
          </div>
          <div className="p-4 bg-primary flex justify-center items-center rounded-lg">
            <DonateIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
