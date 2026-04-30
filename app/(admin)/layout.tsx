"use client"

import React, { useState } from "react"

import SideBar from "@/components/header/sidebar"
import { cn } from "@/lib/utils"

const Layout = ({ children }: { children: React.ReactNode }) => {

    const [isExpand, setIsExpand] = useState<boolean>(true)

    const handleExpandSideBar = () => {
        setIsExpand(prevState => !prevState)
    }


    return (
        <section>
            <SideBar isExpand={isExpand} handleExpandSideBar={handleExpandSideBar} />
            <section className={cn(
                'transform transition-all duration-500 relative',
                isExpand ? 'translate-x-62 w-[calc(100%-248px)]' : 'translate-x-0 w-full'
            )}>
                {children}
            </section>
        </section>
    )
}

export default Layout