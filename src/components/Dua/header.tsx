import SettingsIcon from '../icons/Settings.icon';
import Searchbar from './searchbar';
import UserIcon from '@/components/icons/User.icon.';

export default function Header() {
  return (
    <div className="col-start-2 col-span-full grid grid-cols-[1fr,270px] gap-6 pt-2">
      <div className="flex items-center justify-between">
        <h1 className="font-manrope font-medium text-2xl">Duas Page</h1>
        <Searchbar title="Search by Dua Name" />
      </div>
      <div className="flex justify-end items-center gap-4 2xl:gap-0 px-2">
        <UserIcon />
        <span className="block 2xl:hidden">
          <SettingsIcon />
        </span>
      </div>
    </div>
  );
}
