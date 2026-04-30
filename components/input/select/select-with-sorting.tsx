"use client";

import React, { useState } from "react";
import ListBoxTid, { IListOption } from "@/features/home/components/list-box";
import { cn } from "@/lib/utils";
import SortAscIcon from "@/components/icons/sort-asc-icon";
import SortDescIcon from "@/components/icons/sort-desc-icon";

export type SortingType = "asc" | "desc";

export interface ISelectWIthOrder {
  sortingByOptions: IListOption[];

  sortingBy: IListOption;
  sortingValue: string;

  setSortingBy: React.Dispatch<React.SetStateAction<IListOption>>;
  setSortingValue: React.Dispatch<React.SetStateAction<SortingType>>;
}

const SelectWithSorting = ({
  sortingByOptions,

  sortingBy,
  sortingValue,

  setSortingBy,
  setSortingValue,
}: ISelectWIthOrder) => {
  const handleChangeSortingValue = () => {
    setSortingValue((prev) => {
      if (prev === "asc") {
        return "desc";
      } else {
        return "asc";
      }
    });
  };

  return (
    <div className="flex w-fit">
      <div className="min-w-50">
        <ListBoxTid
          value={sortingBy}
          onChange={setSortingBy}
          listOptions={sortingByOptions}
          isInputGroup={true}
        />
      </div>

      <button
        className={cn(
          "h-full py-2.5 px-3 w-fit border-t border-r  border-b border-tid-grey-200/20  rounded-tr-sm rounded-br-sm cursor-pointer ",
           "disabled:cursor-not-allowed disabled:bg-tid-grey-300",
        )}
        onClick={handleChangeSortingValue}
        disabled={sortingBy.id === ""}
      >
        <div>{sortingValue === "asc" ? <SortAscIcon /> : <SortDescIcon />}</div>
      </button>
    </div>
  );
};
export default SelectWithSorting;
