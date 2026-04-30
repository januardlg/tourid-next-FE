import { StateCreator } from 'zustand'
import { StoreStateType } from './store-state'

export type UserState = {
    username: string
}

export type UserAction = {
    setUsername: (value: string) => void
}


export type UserSlice = UserState & UserAction


export const createUserSlice: StateCreator<
    StoreStateType,
    [],
    [],
    UserSlice
> = (set) => ({
    username: '',
    setUsername: (value) => set({ username: value })
})

