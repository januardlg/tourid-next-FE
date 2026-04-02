'use client'

import { type ReactNode, createContext, useContext, useRef } from 'react'
import { useStore } from 'zustand'
import { createLoadingOverlayStore } from '@/stores/loading-overlay-store'
import { BoundedStoreApiType, createBoundedStore } from '@/stores/userBoundStore'
import { LoadingOverlaySlice } from '@/stores/slices/loading-overlay.slice'
import { ModalSlice } from '@/stores/slices/modal-slice'


// create context
export type LoadingOverlayStoreApi = ReturnType<typeof createLoadingOverlayStore>
export const AppStoreContext = createContext<BoundedStoreApiType | null>(
    null,
)

export interface AppStoreProviderProps {
    children: ReactNode,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialData: any
}

export const AppStoreProvider = ({
    children,
    initialData
}: AppStoreProviderProps) => {

    const storeRef = useRef<BoundedStoreApiType>(null);

    // This logic is synchronous and happens BEFORE the render
    // eslint-disable-next-line react-hooks/refs
    if (!storeRef.current) {
        storeRef.current = createBoundedStore(initialData);
    }

    return (
        // eslint-disable-next-line react-hooks/refs
        <AppStoreContext.Provider value={storeRef.current}>
            {children}
        </AppStoreContext.Provider>
    )
}


export const useAppStore = <T,>(selector: (store: LoadingOverlaySlice & ModalSlice) => T): T => {
    const storeContext = useContext(AppStoreContext);
    if (!storeContext) throw new Error('useAppStore must be used within StoreProvider');
    return useStore(storeContext, selector);
};


