import { getServices } from "../../services/servicesData"
import ServiceCard from "../serviceSection/ServiceCard"

export default function ServicesSection() {
    const serviceData = getServices()

    return (

        <section>
            <div className="flex flex-col gap-5 items-center">
                {serviceData.map((card, index) => (
                    <ServiceCard 
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    )
}