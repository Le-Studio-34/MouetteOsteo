export default function OpeningHoursSection() {
    return (
        <section>
            <div className="flex flex-col w-80 text-center gap-2">
                <h2>Horraires d&apos;ouverture:</h2>
                <hr className="my-6 h-0.5 border-t-0 bg-beige100"/>
                <div className="flex w-full justify-between">
                    <div>Lundi:</div>
                    <div>07:00 - 19:00</div>
                </div>
                <div className="flex w-full justify-between">
                    <div>Mardi:</div>
                    <div>07:00 - 20:00</div>
                </div>
                <div className="flex w-full justify-between">
                    <div>Mercredi:</div>
                    <div>07:00 - 19:00</div>
                </div>
                <div className="flex w-full justify-between">
                    <div>Jeudi:</div>
                    <div>07:00 - 20:00</div>
                </div>
                <div className="flex w-full justify-between">
                    <div>Vendredi:</div>
                    <div>07:00 - 20:00</div>
                </div>
                <div className="flex w-full justify-between">
                    <div>Urgences:</div>
                    <div>15 (Samu)</div>
                </div>
            </div>
        </section>
    )
}