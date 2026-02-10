"use client";
const SearchCategory = () => {
  return (
    <>
      <p className="block mb-2 text-base font-bold w-full">Search</p>
      <div>
        <div className="block w-full relative">
          <select className="border text-base rounded-sm block w-fit py-2.5 px-4 focus:outline-none shadow-md appearance-none ">
            <option
              selected
              className="text-sm border-none py-2.5 px-4 appearance-non "
            >
              Select a category
            </option>
            <option className="text-sm" value="US">
              United States
            </option>
          </select>
        </div>
      </div>
    </>
  );
};
export default SearchCategory;
