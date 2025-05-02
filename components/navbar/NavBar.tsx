import Link from "next/link";
import BurgerMenu from "./BurgerMenu";


export default function NavBar() {

    return (
        <>
            <header className="h-16 bg-[#d8cbb0] w-full">

                <div>
                    <Link href="/"></Link>
                </div>

                <nav>

                </nav>

                <BurgerMenu />
            </header>  
        </>
    )

}