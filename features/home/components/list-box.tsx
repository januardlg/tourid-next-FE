
import React, { Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Field, Label } from '@headlessui/react'

import { cn } from '@/lib/utils';

import CaretUpIcon from '@/components/icons/caret-up-icon';

export interface IListOption {
    id: string | number;
    name: string | number;
    disabled?: boolean;
}

export interface IListBoxTid {
    value: IListOption;
    onChange: (value: IListOption) => void,
    listOptions: IListOption[],
    isInputGroup?: boolean,
    label?: string,
    error?: string,
}

const ListBoxTid = ({ value, onChange, listOptions, isInputGroup = false, label, error }: IListBoxTid) => {

    return (
        <Field>
            {label && <Label className={'font-semibold'}>{label}</Label>}
            <Listbox value={value} onChange={onChange}>
                {({ open }) => (
                    <>
                        <ListboxButton className={cn(
                            'px-4 py-2.5 border border-tid-grey-200 text-left flex-align-items-center justify-between cursor-pointer w-full ',
                            'focus:outline-none',
                            isInputGroup && 'rounded-tl-sm rounded-bl-sm',
                            !isInputGroup && 'rounded-sm '
                        )} >
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
                                <ListboxOption key={listOption.id} value={listOption} as={Fragment} disabled={listOption.disabled}>
                                    {({ focus, selected, disabled }) => (
                                        <div className={cn('flex gap-2 px-4 py-2', focus && 'bg-orange-50', selected && 'bg-orange-100', disabled && 'bg-gray-100 text-tid-grey-200')}>
                                            {listOption.name}
                                        </div>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </>
                )}

            </Listbox>
            <div className={cn(
                'h-4 opacity-0 transition-all duration-100 ease-in-out',
                error && 'flex opacity-100 '
            )}>
                <p className="text-sm text-red-400 ml-0.5">{error}</p>
            </div>
        </Field>
    )
}

export default ListBoxTid