import { ServiceCardProps } from "../models/ServicesSection/ServiceCardProps";

export const getServices = (): ServiceCardProps[] => {

    return [
        {
            image: "/images/osteopathie.webp",
            title: "Ostéopathie",
            description: "Art de traiter manuellement les douleurs du patient en recherchant la cause du problème initial et en équilibrant tout le corps.",
        },
        {
            image: "",
            title: "Accompagnement Personnel",
            description: "Mise en lumière de vos comportements en découvrant et en expliquant votre mécanique physique, psychique et émotionnelle.",
        },
        {
            image: "",
            title: "Préparation Physique",
            description: "Analyse et mise en place d'exercices personnalisés, pour accompagner une récupération après blessure ou pour améliorer des performances.",
        },
        {
            image: "",
            title: "Acupuncture",
            description: "Branche de la médecine chinoise permettant d&apos;équilibrer l&apos;énergie du corps, pour soigner ou prévenir des symptômes divers.",
        },

    ]
}