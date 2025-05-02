'use client'

import { Menu } from "lucide-react"



export default function BurgerMenu() {

    return (
        <>
            <div className="flex justify-end items-center"> {/* warum nicht mittig? */}
                <Menu size={48} color="#2e1f1a"/>
            </div>
        </>
    )   
}     