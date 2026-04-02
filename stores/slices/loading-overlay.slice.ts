import { StateCreator } from 'zustand'
import { StoreStateType } from './store-state'

export type LoadingOverlayState = {
    isOpenLoadingOverlay: boolean
}

export type LoadingOverlayAction = {
    setIsOpenLoadingOverlay: (value: boolean) => void
}


export type LoadingOverlaySlice = LoadingOverlayState & LoadingOverlayAction


export const createLoadingOverlaySlice: StateCreator<
    StoreStateType,
    [],
    [],
    LoadingOverlaySlice
> = (set) => ({
    isOpenLoadingOverlay: false,
    setIsOpenLoadingOverlay: (value) => set((state) => ({ isOpenLoadingOverlay: value }))

})

