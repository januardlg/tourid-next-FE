
const TermConditionTour = () => {


    const TERM_CONDITIONS = [
        {
            title: 'Free Cancelation',
            description: 'Cancel up to 24 hours in advance to receive a full refund'
        },
        {
            title: 'Health precautions',
            description: 'Special health and safety measures apply. Learn more'
        },
        {
            title: 'Mobile ticketing',
            description: 'Use your phone or print your voucher'
        },
        {
            title: 'Health precautions3',
            description: 'Special health and safety measures apply. Learn more'
        },
        {
            title: 'Duration',
            description: '10/12/2021 - 12/12/2021'
        },
        {
            title: 'Instant confirmation',
            description: 'Don’t wait for the confirmation!'
        },
    ]


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