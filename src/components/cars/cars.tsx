import Image from "next/image";
import { CarsProps } from "./cars.props";

const Cars = ({ carPark }: CarsProps) => {
  return (
    <div className="py-20">
      <div className="global_container">

        {carPark.map((elem) => (
          <>
            <div className="py-10" key={elem.id}>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden  _bg_color px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                  >
                    <circle
                      cx={512}
                      cy={512}
                      r={512}
                      fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                      fillOpacity="1"
                    />
                    <defs>
                      <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#375E97" />
                        <stop offset={6} stopColor="#FB6542" />
                      </radialGradient>
                    </defs>
                  </svg>
                  <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-2xl">
                     {elem.name}
                    </h2>
                    <p className="mt-6 text-sm leading-2 text-gray-300 text-justify">
                     {elem.description.text}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                      <a
                        href="tel:+7 (926) 956-92-32"
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Вызвать Пухто (Мультилифт)
                      </a>
                    </div>
                  </div>
                  <div className="relative mt-16 h-80 max-sm:h-80 md:h-96 lg:mt-8">
                    <Image
                      className="absolute left-0 top-0 max-sm:top-5 w-[42rem] max-sm:w-[30rem] max-w-none rounded-md"
                      src={elem.image.url}
                      alt="App screenshot"
                      width={1824}
                      height={1080}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

      </div>
    </div>
  );
};

export default Cars;
