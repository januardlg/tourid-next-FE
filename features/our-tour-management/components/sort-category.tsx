"use client";

import React, { useState } from 'react'
import ListBoxTid, { IListOption } from '@/features/home/components/list-box';
import { cn } from '@/lib/utils';
import SortAscIcon from '@/components/icons/sort-asc-icon';
import SortDescIcon from '@/components/icons/sort-desc-icon';

const sortingByOptions: IListOption[] = [
    { id: 'start_date', name: 'Start Date' },
    { id: 'quota', name: 'Quota' },
]

type SortingType = 'asc' | 'desc'

const SortCategory = () => {
    const [sortingBy, setFilterBy] = useState(sortingByOptions[0])

    const [sortingValue, setSortingValue] = useState<SortingType>('desc')

    const handleChangeSortingValue = () => {
        setSortingValue((prev) => {
            if (prev === "asc") {
                return "desc"
            } else {
                return "asc"
            }
        })
    }


    return (
        <div className='flex-align-items-center shadow-sm w-fit'>
            <div className='min-w-50'>
                <ListBoxTid value={sortingBy} onChange={setFilterBy} listOptions={sortingByOptions} isInputGroup={true} />
            </div>

            <div className={cn('h-full py-2.5 px-3 w-fit border-t border-r  border-b border-tid-grey-200/20  rounded-tr-sm rounded-br-sm cursor-pointer bg-white '
            )}
                onClick={handleChangeSortingValue}
            >
                {sortingValue === 'asc' ? (<SortAscIcon />) : (<SortDescIcon />)}
            </div>
        </div >
    )

};
export default SortCategory;
