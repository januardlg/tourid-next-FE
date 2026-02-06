'use client'
import Button from "@/components/button/button"
import FormInput from "@/components/input/form-input"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const RegisterContainer = () => {


    const [value, setValue] = useState({
        username: '',
        email: '',
        password: '',
        repassword: ''
    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prevVal) => {
            return {
                ...prevVal,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleClick = () => {
        console.log({ value })
    }


    return (
        <section className="w-full h-full flex flex-col justify-center items-center">
            <div className="space-y-3 w-full text-center">
                <p className="text-tid-red-100 text-[32px]"> Create Account</p>
                <p className="text-tid-grey-100"> By creating an account, you agree to our <span className="text-tid-red-100"> Privacy policy </span> and <span className="text-tid-red-100">Terms </span>  of use.</p>
            </div>

            <div className="space-y-5 w-full mt-6">
                <FormInput name="username" value={value.username} onChange={handleChangeInput} placehodler="Enter Username" />
                <FormInput name="email" value={value.email} onChange={handleChangeInput} placehodler="Enter Email" />
                <FormInput name="password" value={value.password} onChange={handleChangeInput} placehodler="Enter Password" />
                <FormInput name="repassword" value={value.repassword} onChange={handleChangeInput} placehodler="Re Enter Password" />


                <div className="flex justify-center">
                    <div className="w-fit flex flex-col">
                        <Button type="PRIMARY" onClick={handleClick}>
                            <p className="px-20">CREATE ACCOUNT</p>
                        </Button>
                        <div className="w-full mt-5 grid grid-cols-12 items-center">
                            <div className="col-span-5">
                                <div className="h-px bg-tid-red-100"></div>
                            </div>
                            <div className="col-span-2">
                                <p className="text-center font-semibold text-tid-red-100"> OR </p>
                            </div>
                            <div className="col-span-5">
                                <div className="h-px bg-tid-red-100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <Button type="OUTLINE" onClick={() => { }}>
                        <Image src={`/icons/google-icon.png`} alt="google" width={16} height={16} />
                    </Button>
                    <Button type="OUTLINE" onClick={() => { }}>
                        <Image src={`/icons/facebook-icon.png`} alt="facebook" width={16} height={16} />
                    </Button>
                    <Button type="OUTLINE" onClick={() => { }}>
                        <Image src={`/icons/apple-icon.png`} alt="apple" width={16} height={16} />
                    </Button>
                </div>

                <p className="text-center text-tid-grey-100 text-sm">Already have an account? <span><Link href={'/login'} className="text-tid-red-100"> Login</Link></span> </p>

            </div>


        </section>
    )
}

export default RegisterContainer