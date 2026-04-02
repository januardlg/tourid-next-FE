import { createStore, StoreApi } from 'zustand'
import { createLoadingOverlaySlice, LoadingOverlaySlice } from './slices/loading-overlay.slice'
import { createModalSlice, ModalSlice } from './slices/modal-slice'
import { StoreStateType } from './slices/store-state';


export type BoundedStoreApiType = StoreApi<StoreStateType>;

export const createBoundedStore = (initProps?: Partial<StoreStateType>): BoundedStoreApiType => {
    return createStore<LoadingOverlaySlice & ModalSlice>((...a) => ({
        ...createLoadingOverlaySlice(...a),
        ...createModalSlice(...a),
        ...initProps, // Hydrate data from Server here
    }))
}
