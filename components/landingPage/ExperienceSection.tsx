import Image from "next/image"

export default function ExperienceSection() {

    return (
       <section>
            {/* muss man noch ändern ist nur eine Idee */}
            <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-5 text-center">
                    <h2>Notre Mission</h2>
                    <p>Pour nos patients (homme, femme, enfant, sportif) notre métier consiste à écouter, examiner, traiter et conseiller. Nous mettons en place une prise en charge cohérente et efficace, basée sur notre expérience et l&apos;évolution de la science.</p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <Image 
                        src="/images/30.png"
                        alt="30 years of experience"
                        width={300}
                        height={200}
                    />
                    <p>Années d&apos;expérience</p>
                </div>
            </div>
       </section>
    )

}