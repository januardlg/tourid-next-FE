import { create, StateCreator } from 'zustand'
import { LoadingOverlaySlice } from './loading-overlay.slice'

export type ModalState = {
    isOpenModal: boolean
}

export type ModalAction = {
    setIsOpenModal: (value: boolean) => void
}


export type ModalSlice = ModalState & ModalAction


export const createModalSlice: StateCreator<
    LoadingOverlaySlice & ModalSlice,
    [],
    [],
    ModalSlice
> = (set) => ({
    isOpenModal: false,
    setIsOpenModal: (value) => set((state) => ({ isOpenModal: value }))

})

