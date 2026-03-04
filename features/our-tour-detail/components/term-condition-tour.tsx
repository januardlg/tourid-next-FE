import { TERM_CONDITIONS } from "../lib/static-data"

const TermConditionTour = () => {

    return (
        <section className="mt-10 p-8 bg-tid-grey-300 grid grid-cols-3 gap-x-4 gap-y-8">
            {TERM_CONDITIONS.map((tac) => (
                <div key={tac.title} className="text-sm">
                    <p className="font-semibold">{tac.title}</p>
                    <p className="text-tid-grey-100">{tac.description}</p>
                </div >
            ))}

        </section >
    )
}

export default TermConditionTour