import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";


export default function NavBar() {

    return (
        <>
            <header className="flex h-20 bg-beige200 w-full justify-between items-center px-5 py-4">
                <div className="md:hidden">
                    <Link href="/">
                        <Image 
                            src="/assets/roundLogo.png"
                            alt="Logo Centre des Deux Mains"
                            width="40"
                            height="40"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex">
                    <Link href="/">Centre des Deux Mains</Link>
                </div>
                <nav className="hidden md:flex gap-5">
                    <Link href="">Acceuil</Link>
                    <Link href="">Franck Mouette</Link>
                    <Link href="">Cabinet</Link>
                    <Link href="">Nos Conseils</Link>
                    <Link href="">Nos Articles</Link>
                    <Link href="">Questions Fréquentes</Link>
                </nav>
                <BurgerMenu />
            </header>  
        </>
    )

}