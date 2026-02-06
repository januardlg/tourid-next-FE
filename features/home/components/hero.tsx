import Link from "next/link"
import Image from "next/image"
const HeroComponent = () => {
    return (
        <section className="flex mt-4 relative h-191 items-center ">
            <div className="w-2/3 h-full flex flex-col justify-center">
                <p className="text-xl text-tid-red-100 uppercase font-bold">Best Destinations around indonesia</p>
                <p className="mt-6 text-[84px] leading-24 font-bold text-[#181E4B]">Join our trips or build your dream getaway.</p>
                <p className="w-2/3 text-base text-tid-grey-200 mt-7 leading-7">
                    Discover our carefully curated trips across Indonesia, or create a personalized getaway that matches your style, pace, and dream destinations.
                </p>
                <Link href="/">
                    <div className="px-6 py-4 w-fit bg-tid-red-100 mt-8 rounded-[10px] drop-shadow-[0_20px_35px_rgba(241,165,1,0.15)]" >
                        <p className="text-white text-lg font-medium"> Find Out More</p>
                    </div>
                </Link>
            </div>
            <div className="w-2/3 absolute right-0 flex justify-end h-full">
                <Image src={`/images/hero-image-travel.png`} alt="hero-image" width={1200} height={600} className="w-auto h-full"  ></Image>
            </div>
        </section>
    )
}

export default HeroComponent