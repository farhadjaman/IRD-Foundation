import SearchIcon from '../icons/Search.icon';
import DuasImportance from '../icons/Duas/DuasImportance.icon';
import DuaArrowIcon from '../icons/Duas/DuaArrow.icon';
const Catagories = () => {
  const Searchbar = ({ title }: { title: string }) => (
    <div className="mx-2 max-w-full relative text-gray-600 mb-4">
      <input
        className="h-12 w-full w-42 rounded-lg px-2 text-md focus:outline-none border-[1px] drop-shadow-sm border-gray-300 focus:border-primary"
        type="search"
        name="cataogrySearch"
        placeholder={title}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-1 mr-1 p-2 px-4 bg-white rounded-md"
      >
        <SearchIcon />
      </button>
    </div>
  );
  return (
    <div className="bg-white mb-12 overflow-hidden rounded-2xl">
      <div className=" bg-primary flex py-4 justify-center mb-4">
        <p className="text-lg text-white">Catagories</p>
      </div>
      <Searchbar title="Search Catagories" />
      <div className=" flex flex-col px-3 gap-2">
        <div className="mb-1 w-full ">
          <div className="bg-secondary rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <div className="m-2 p-2 rounded-md bg-white">
                <DuasImportance />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-semibold">Dua's Importance</h1>
                <p className="text-xs font-medium text-textGray">Subcategory: 7</p>
              </div>
            </div>
            <div className="flex-col justify-between px-2">
              <p className="text-lg font-medium mx-auto">21</p>
              <p className="text-xs text-textGray">Duas</p>
            </div>
          </div>
          <div className="ml-12 border-dotted border-l-2 my-2 border-primary">
            <div className="flex flex-col gap-y-2 ml-3 ">
              <div className="flex my-2">
                <div className="bg-primary -translate-x-4 mt-2 w-1 h-1 rounded-full"></div>
                <div className="flex flex-col">
                  <p className="text-primary cursor-pointer font-semibold text-sm">
                    Excellence of dua in the morning &amp; evening
                  </p>
                  <div className="mt-2 cursor-pointer">
                    <div className="flex flex-row gap-1">
                      <DuaArrowIcon />
                      <p className="text-xs px-2 ">
                        Excellence of dua in the morning &amp; evening
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row my-2">
                <div className="bg-primary -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                <div className="flex flex-col justify-start items-start">
                  <p className="text-title cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush">
                    Morning &amp; Evening Adhkar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
