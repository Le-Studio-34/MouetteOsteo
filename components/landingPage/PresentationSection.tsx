import Image from "next/image"

export default function PresentationSection() {

    return(
        <section className=""> {/* weiter runter verschieben obwohl section in globals schon einen Wert hat */}
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-6">
                    <h1>Centre des Deux Mains</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                    <button type="button">
                        Nos services
                    </button>
                </div>
                <Image 
                    src="/images/replaceMe.png"
                    alt=""
                    width={350}
                    height={500}
                />
            </div>
        </section>
    )
}