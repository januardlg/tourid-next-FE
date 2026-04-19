"use client";
import ListBoxTid, { IListOption } from "@/features/home/components/list-box";

interface SelectCategoryProps {
  categoryOptionsList: IListOption[];
  selectedCategory: IListOption;
  setSelectedCategory: React.Dispatch<React.SetStateAction<IListOption>>;
}

const SelectCategory = ({
  categoryOptionsList,
  selectedCategory,
  setSelectedCategory,
}: SelectCategoryProps) => {
  return (
    <div className="">
      <ListBoxTid
        value={selectedCategory}
        listOptions={categoryOptionsList}
        onChange={setSelectedCategory}
      />
    </div>
  );
};

export default SelectCategory;
