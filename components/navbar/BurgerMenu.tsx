'use client'

import { Menu } from "lucide-react"

export default function BurgerMenu() {

    return (
        <>
            <div className="flex w-full h-full justify-end items-center md:hidden">
                <Menu size={32} color="#2e1f1a"/>
            </div>
        </>
    )   
}     