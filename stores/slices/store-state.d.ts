
import { LoadingOverlaySlice } from "./loading-overlay.slice";
import { ModalSlice } from "./modal-slice";
import { UserSlice } from "./user-slice";

export type StoreStateType = LoadingOverlaySlice & ModalSlice & UserSlice;

