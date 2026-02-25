
import React, { Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'

import { cn } from '@/lib/utils';

import CaretUpIcon from '@/components/icons/caret-up-icon';

export interface IListOption {
    id: string;
    name: string
}

export interface IListBoxTid {
    value: IListOption;
    onChange: React.Dispatch<React.SetStateAction<IListOption>>,
    listOptions: IListOption[]
}

const ListBoxTid = ({ value, onChange, listOptions }: IListBoxTid) => {

    return (
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <ListboxButton className={cn('px-4 py-2.5 border border-tid-grey-200 rounded-tl-sm rounded-bl-sm  text-left flex-align-items-center justify-between cursor-pointer ', 'focus:outline-none')} >
                        {value.name}
                        <div className={cn('transition duration-100 ease-in ', !open && 'rotate-180')}>
                            <CaretUpIcon />
                        </div>
                    </ListboxButton>
                    <ListboxOptions anchor="bottom"
                        className={cn(
                            'w-(--button-width) rounded-sm p-1 [--anchor-gap:--spacing(1)] focus:outline-none bg-white shadow-md',
                            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                        )}
                    >
                        {listOptions.map((listOption) => (
                            <ListboxOption key={listOption.id} value={listOption} as={Fragment}>
                                {({ focus, selected }) => (
                                    <div className={cn('flex gap-2 px-4 py-2', focus && 'bg-orange-50', selected && 'bg-orange-100')}>
                                        {listOption.name}
                                    </div>
                                )}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </>
            )}

        </Listbox>
    )
}

export default ListBoxTid