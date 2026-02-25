"use client"

import Image from "next/image"
import ImagePickerIcon from "@/components/icons/image-picker-icon"
import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

const ImagePicker = () => {


    const imagePickerRef = useRef<HTMLInputElement | null>(null)

    const [base64Image, setBase64Image] = useState<string>('')


    const handleClickImagePicker = () => {
        imagePickerRef.current?.click()
    }

    const handleChangeImagePicker = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files && e?.target?.files[0].type.startsWith('image/')) {
            const file = e?.target?.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result
                setBase64Image(base64String as string)
                console.log({ base64String })
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <input
                type="file"
                ref={imagePickerRef}
                onChange={handleChangeImagePicker}
                className="hidden"
                accept="image/*"
            />

            <button onClick={handleClickImagePicker} className={cn(
                "w-115.5 h-60  bg-white rounded-2xl  text-sm cursor-pointer",
                'hover:bg-tid-red-100/5',
            )}>
                {base64Image ? (
                    <div className="w-full h-full relative group">
                        <div className={cn(
                            "w-full h-full absolute z-10 opacity-0 flex flex-col items-center justify-center rounded-2xl",
                            'group-hover:opacity-100 bg-tid-grey-100/60 transition duration-400 ease-in-out'
                        )}>
                            <ImagePickerIcon />
                            <p className="mt-6 font-semibold text-white ">Browse to replace image</p>
                        </div>
                        <Image src={base64Image} width={200} height={200} className="w-full h-full rounded-2xl" alt="image-preview" />
                    </div>
                ) : (
                    <div className="flex flex-col items-center rounded-2xl">
                        <ImagePickerIcon />
                        <p className="mt-6 font-semibold ">Drag and drop Thumbnail image here, or Browse</p>
                        <p className="text-tid-grey-200">Minimum 800px width recommended. Max 10MB each</p>
                    </div>
                )
                }
            </button >
        </div >
    )
}

export default ImagePicker