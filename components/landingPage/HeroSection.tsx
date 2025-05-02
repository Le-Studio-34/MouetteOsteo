import Image from "next/image"

export default function HeroSection() {

    return (
        <div>
            <Image 
              src="/images/montBlanc.webp"
              alt=""
              width="600"
              height="400"
              className="grayscale-100"
            />
            <div className="flex flex-col">
                Ich bin Text und muss geändert werden. Hier soll sowas wie Get back to your best
                <div>
                    <button type="button">
                        Prendre rendez-vous
                    </button>
                </div>
            </div>
        </div>
    )

}