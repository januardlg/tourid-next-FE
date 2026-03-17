import { createStore } from 'zustand'
import { createLoadingOverlaySlice, LoadingOverlaySlice } from './slices/loading-overlay.slice'
import { createModalSlice, ModalSlice } from './slices/modal-slice'

export const createBoundedStore = (initProps?: Partial<LoadingOverlaySlice & ModalSlice>) => {
    return createStore<LoadingOverlaySlice & ModalSlice>((...a) => ({
        ...createLoadingOverlaySlice(...a),
        ...createModalSlice(...a),
        ...initProps, // Hydrate data from Server here
    }))
}

export type BoundedStore = ReturnType<typeof createBoundedStore>