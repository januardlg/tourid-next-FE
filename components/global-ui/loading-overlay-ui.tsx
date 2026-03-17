'use client'

import { useLoadingOverlayStore } from "@/providers/loading-overlay-provider"

import { Dialog, DialogPanel } from "@headlessui/react"
import LoadingCircle from "../loading/loading-circle"

const LoadingOverlayUI = () => {
    const { isOpenLoadingOverlay, setIsOpenLoadingOverlay } = useLoadingOverlayStore((state) => state)

    return (
        <Dialog open={isOpenLoadingOverlay} onClose={setIsOpenLoadingOverlay} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-tid-grey-200/40 ">
                <DialogPanel className="max-w-lg p-12">
                    <LoadingCircle />
                </DialogPanel>
            </div>
        </Dialog>
    )
}


export default LoadingOverlayUI