import SearchIcon from '@/components/icons/Search.icon';

function Searchbar() {
  return (
    <div className="w-80 max-w-full relative text-gray-600 ">
      <input
        className=" bg-white h-12 w-full w-42 rounded-lg px-2 text-md focus:outline-none focus:border-2 focus:border-primary"
        type="search"
        name="search"
        placeholder="Search Dua by Name"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-1 mr-1 p-2 px-4 bg-secondary rounded-md"
      >
        <SearchIcon />
      </button>
    </div>
  );
}

export default Searchbar;
