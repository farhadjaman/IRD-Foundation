import HomeIcon from '@/components/icons/Home.icon';
import DonateIcon from '@/components/icons/Donate.icon';
import WidgetIcon from '@/components/icons/Widget.icon';
import MemorizeIcon from '@/components/icons/Memorize.icon';
import BookmarkIcon from '@/components/icons/Bookmark.icon';
import ChatIcon from '@/components/icons/Chat.icon';
import JarIcon from '@/components/icons/Jar.icon';
import BookIcon from '@/components/icons/Book.icon';

export default function Sidebar() {
  const navItems = [
    {
      id: 1,
      icon: <HomeIcon />,
    },
    {
      id: 2,
      icon: <WidgetIcon />,
    },
    {
      id: 3,
      icon: <MemorizeIcon />,
    },
    {
      id: 4,
      icon: <BookmarkIcon />,
    },
    {
      id: 5,
      icon: <JarIcon />,
    },
    {
      id: 6,
      icon: <ChatIcon />,
    },
    {
      id: 7,
      icon: <BookIcon />,
    },
  ];
  return (
    <div className="row-span-full">
      <div className="w-[100px] gap-y-5 fixed overflow-hidden">
        <div className="bg-white flex flex-col justify-between items-center rounded-2xl px-1 h-[calc(100vh-50px)] py-8">
          <div className="w-full">
            <img src="images/logo.png" alt="logo" />
          </div>
          <div className="flex flex-col gap-y-4">
            {navItems.map((item) => (
              <div key={item.id} className="p-3 bg-secondary mx-auto rounded-full">
                {item.icon}
              </div>
            ))}
          </div>
          <div className="p-4 bg-primary flex justify-center items-center rounded-lg">
            <DonateIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
