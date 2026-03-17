import { create, StateCreator } from 'zustand'
import { ModalSlice } from './modal-slice'

export type LoadingOverlayState = {
    isOpenLoadingOverlay: boolean
}

export type LoadingOverlayAction = {
    setIsOpenLoadingOverlay: (value: boolean) => void
}


export type LoadingOverlaySlice = LoadingOverlayState & LoadingOverlayAction


export const createLoadingOverlaySlice: StateCreator<
    ModalSlice & LoadingOverlaySlice,
    [],
    [],
    LoadingOverlaySlice
> = (set) => ({
    isOpenLoadingOverlay: false,
    setIsOpenLoadingOverlay: (value) => set((state) => ({ isOpenLoadingOverlay: value }))

})

