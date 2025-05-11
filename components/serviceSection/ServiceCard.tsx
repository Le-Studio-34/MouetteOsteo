import Image from "next/image";
import { ServiceCardProps } from "../../models/ServicesSection/ServiceCardProps";

export default function ServiceCard({
    image,
    title,
    description}: ServiceCardProps) {

    return (

        <>
            <div className="flex flex-col w-80 text-center bg-beige300 rounded-3xl gap-5 pb-5">
                <div className="overflow-hidden ">
                    <Image 
                        src={image}
                        alt={title}
                        width={350}
                        height={200}
                    />
                </div>
                <div className="px-2.5">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <button type="button">
                        En savoir plus
                    </button>
                </div>
            </div>
        </>
    )
}