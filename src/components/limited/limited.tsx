import Image from "next/image";
import Link from "next/link";
const Limited = () => {
  return (
    <div className="limited_section">
      <div className="global_container">
        <div>
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
                  Бесплатный вывоз от 50 кг лома цветных металлов, от 300 кг
                  лома чёрных металлов.
                </h2>
                {/* <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p> */}
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href="/carpark"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Автопарк
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <Image
                  className="absolute left-0 top-0 max-sm:top-20 w-[42rem] max-sm:w-[25rem] max-w-none rounded-md"
                  src="https://dksmet.ru/wp-content/uploads/2022/02/main_img.png"
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Limited
