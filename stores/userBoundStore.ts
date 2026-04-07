import { createStore, StoreApi } from 'zustand'
import { createLoadingOverlaySlice, LoadingOverlaySlice } from './slices/loading-overlay.slice'
import { createModalSlice, ModalSlice } from './slices/modal-slice'
import { StoreStateType } from './slices/store-state';
import { createUserSlice } from './slices/user-slice';


export type BoundedStoreApiType = StoreApi<StoreStateType>;

export const createBoundedStore = (initProps?: Partial<StoreStateType>): BoundedStoreApiType => {
    return createStore<StoreStateType>((...a) => ({
        ...createLoadingOverlaySlice(...a),
        ...createModalSlice(...a),
        ...createUserSlice(...a),
        ...initProps, // Hydrate data from Server here
    }))
}
