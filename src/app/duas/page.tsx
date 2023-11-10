import Header from '@/components/Dua/header';
import Sidebar from '@/components/Dua/sidebar';
import Settings from '@/components/Dua/settings';
import Catagories from '@/components/Dua/Catagories/Catagories';
import Cards from '@/components/Dua/Cards/Sections';

export default function Home() {
  return (
    <div className="font-manrope bg-secondary  p-6 py-12">
      <div className="relative z-0 grid gap-6 grid-rows-[46px,1fr] grid-cols-[105px,350px,1fr,270px] 3xl:grid-cols-[105px,350px,1fr,300px]">
        <Sidebar />
        <Header />
        <div className="w-full grid grid-cols-[350px,1fr] gap-6 col-span-2 mx-auto">
          <Catagories />
          <Cards />
        </div>
        <Settings />
      </div>
    </div>
  );
}
