import Image from "next/image";
import SubscribeFormInput from "./subscribe-input";

const SubscribeForm = () => {
  return (
    <section className="mt-15 grid w-full">
      <section className="col-span-10 relative">
        <div className="w-[98%] mt-5 bg-[#DFD7F9]/50 py-20 rounded-tl-[120px] rounded-2xl">
          <div className="px-30 flex justify-center">
            <p className="text-center text-xl text-tid-grey-200 font-semibold  max-w-[60%]">
              Subscribe to get information, latest news and other interesting
              offers about TourID
            </p>
          </div>
          <div>
            <SubscribeFormInput />
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Image
            src={`/icons/subscribe-logo.png`}
            alt="subscirbe"
            width={60}
            height={60}
          />
        </div>
      </section>
    </section>
  );
};

export default SubscribeForm;
