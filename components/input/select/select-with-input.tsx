"use client";

import React, { useState } from "react";
import ListBoxTid, { IListOption } from "@/features/home/components/list-box";
import { cn } from "@/lib/utils";

const filterByOptions: IListOption[] = [
  { id: "option", name: "Select Category", disabled: true },
  { id: "name_package", name: "Package Name" },
  // { id: 'start_date', name: 'Start Date' },
  { id: "description", name: "Description" },
];

export interface ISelectWithInput {
  filterByOptions: IListOption[];
  filterBy: IListOption;
  filterValue: string;

  setFilterBy: React.Dispatch<React.SetStateAction<IListOption>>;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectWithInput = ({
  filterByOptions,
  filterBy,
  filterValue,
  setFilterBy,
  setFilterValue,
}: ISelectWithInput) => {
  const handleChangeInputFilterValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="grid grid-cols-2">
      <ListBoxTid
        value={filterBy}
        onChange={setFilterBy}
        listOptions={filterByOptions}
        isInputGroup={true}
      />
      <div>
        <input
          className={cn(
            "w-full py-2.5 px-4 border-t border-r  border-b border-tid-grey-200/20 rounded-tr-sm rounded-br-sm bg-white",
            "focus:outline-none ",
            // 'disabled:bg-tid-grey-300 disabled:cursor-not-allowed'
          )}
          // disabled={filterBy.id === ""}
          placeholder="Input Search"
          name="filterValue"
          value={filterValue}
          onChange={handleChangeInputFilterValue}
        />
      </div>
    </div>
  );
};
export default SelectWithInput;
