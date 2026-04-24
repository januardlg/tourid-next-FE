'use client'

import { useAppStore } from "@/providers/app-store-provider"

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import Button from "../button/button"
import { initModalContent } from "@/stores/slices/modal-slice"
import { cn } from "@/lib/utils"

const ModalUI = () => {
    const { isOpenModal, setIsOpenModal, modalContent, setModalContent } = useAppStore((state) => state)

    const isHaveOkButton = modalContent?.okHanlde && modalContent.okText

    const handleModalContentClose = () => {
        setModalContent((prev) => {
            return{
                ...prev,
                 title: '',
                notes: '',
                okText: '',
                cancelText: 'Cancel',
                cancelHandle: () => { },
                okHanlde: () => { },
            }
        })
    }

    return (
        <Dialog open={isOpenModal} onClose={setIsOpenModal} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-tid-grey-200/40 ">
                <DialogPanel
                    transition
                    className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-sm duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                >
                    <DialogTitle as="h1" className="text-xl font-semibold text-tid-red-100 text-center">
                        {modalContent?.title}
                    </DialogTitle>
                    <p className="mt-2 text-tid-red-100 text-center">
                        {modalContent?.notes}
                    </p>
                    <div className="mt-4 w-full flex justify-center  space-x-3">
                        {isHaveOkButton && (
                            <div className="min-w-25">
                                <Button variant="PRIMARY"
                                    onClick={() => {
                                        modalContent.okHanlde && modalContent?.okHanlde()
                                        setIsOpenModal(false)
                                        handleModalContentClose()
                                    }}
                                >
                                    <p className="text-white">{modalContent?.okText ?? 'OK'}</p>
                                </Button>
                            </div>
                        )}
                        <div className="min-w-25">
                            <Button variant={isHaveOkButton ? "OUTLINE":"PRIMARY"} onClick={() => {
                                setIsOpenModal(false)
                                modalContent?.cancelHandle && modalContent.cancelHandle()
                                handleModalContentClose()
                            }}>
                                <p className={cn(
                                    isHaveOkButton && "text-tid-red-100",
                                    !isHaveOkButton && "text-white"
                                )}>{modalContent?.cancelText ?? 'Cancel'}</p>
                            </Button>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}


export default ModalUI