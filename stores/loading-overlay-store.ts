import { createStore } from 'zustand'

export type LoadingOverlayState = {
    isOpenLoadingOverlay: boolean
}

export type LoadingOverlayAction = {
    setIsOpenLoadingOverlay: (value: boolean) => void
}

export type LoadingOverlayStore = LoadingOverlayState & LoadingOverlayAction


export const defaultInitState: LoadingOverlayState = {
    isOpenLoadingOverlay: false,
}

export const createLoadingOverlayStore = (
    initState: LoadingOverlayState,
) => {
    return createStore<LoadingOverlayStore>()((set) => ({
        ...initState,
        ...defaultInitState,
        setIsOpenLoadingOverlay: (value) => set((state) => ({ isOpenLoadingOverlay: value }))
    }))
}