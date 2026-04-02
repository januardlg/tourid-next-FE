import { StateCreator } from 'zustand'
import { StoreStateType } from './store-state'

export interface IModalContent {
    title: string
    notes: string;
    okText?: string;
    cancelText?: string;
    okHanlde?: () => void;
    cancelHandle?: () => void
}


export type ModalState = {
    isOpenModal: boolean
    modalContent: IModalContent | undefined
}

export type ModalAction = {
    setIsOpenModal: (value: boolean) => void
    setModalContent: (value: IModalContent) => void

}


export type ModalSlice = ModalState & ModalAction

export const createModalSlice: StateCreator<
    StoreStateType,
    [],
    [],
    ModalSlice
> = (set) => ({
    isOpenModal: false,
    modalContent: undefined,
    setIsOpenModal: (value) => set((state) => ({ isOpenModal: value })),
    setModalContent: (value) => set((state) => ({
        modalContent: {
            ...state.modalContent,
            ...value
        }
    }))


})

