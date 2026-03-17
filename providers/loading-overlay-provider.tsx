'use client'

import { type ReactNode, createContext, useState, useContext, useRef } from 'react'
import { useStore } from 'zustand'
import { LoadingOverlayState, type LoadingOverlayStore, createLoadingOverlayStore, defaultInitState } from '@/stores/loading-overlay-store'
import { BoundedStore, createBoundedStore } from '@/stores/userBoundStore'
import { LoadingOverlaySlice } from '@/stores/slices/loading-overlay.slice'
import { ModalSlice } from '@/stores/slices/modal-slice'


// create context
export type LoadingOverlayStoreApi = ReturnType<typeof createLoadingOverlayStore>
export const LoadingOverlayStoreContext = createContext<LoadingOverlaySlice & ModalSlice | null>(
    null,
)

export interface LoadingOverlayStoreProviderProps {
    children: ReactNode,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialData: any
}

export const LoadingOverlayStoreProvider = ({
    children,
    initialData
}: LoadingOverlayStoreProviderProps) => {
    // const [store] = useState(() => createLoadingOverlayStore())

    const storeRef = useRef<BoundedStore>(null);

    // This logic is synchronous and happens BEFORE the render
    // eslint-disable-next-line react-hooks/refs
    if (!storeRef.current) {
        storeRef.current = createBoundedStore(initialData);
    }

    return (
        // eslint-disable-next-line react-hooks/refs
        <LoadingOverlayStoreContext.Provider value={storeRef.current}>
            {children}
        </LoadingOverlayStoreContext.Provider>
    )
}


export const useLoadingOverlayStore = <T,>(selector: (store: LoadingOverlaySlice & ModalSlice) => T): T => {
    const storeContext = useContext(LoadingOverlayStoreContext);
    if (!storeContext) throw new Error('useLoadingOverlayStore must be used within StoreProvider');
    return useStore(storeContext, selector);
};


