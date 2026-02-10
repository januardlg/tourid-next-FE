import FeaturedTour from "../components/featured-tour"
import HeroComponent from "../components/hero"
import StepOrder from "../components/step-order"
import SubscribeForm from "../components/subscribe-form"

const HomeContainer = () => {
    return (
        <>
            <HeroComponent />
            <FeaturedTour />
            <StepOrder />
            <SubscribeForm />
        </>
    )
}

export default HomeContainer