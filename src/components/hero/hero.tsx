import Image from "next/image";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-20">
      <Image
        src="https://sun9-7.userapi.com/impf/6yNxZoijxr_3KYzeJrZ0FMwWgOvFhZl5HOn3zQ/rcdzLl0gEl8.jpg?size=1818x606&quality=95&crop=169,0,1580,526&sign=f4ca92e6484b27dc67081e71040ee196&type=cover_group"
        alt=""
        fill
        className="absolute inset-0 -z-10 h-auto w-full"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FB6542] to-[#375E97] opacity-2"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FB6542] to-[#375E97] opacity-2"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            ПРИЕМ МЕТАЛЛА ДО 27000 ЗА ТОННУ!
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Прием, демонтаж и вывоз черного и цветного металлолома в Москве и
            области
          </p>
        </div>
        <div className="py-6 mt-10 ">
          <div className={styles.nav_call_btn_media}>
            <a
              href="tel:+7 (926) 956-92-32"
              className=" xl:inline-flex lg:inline-flex md:inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium sm:hidden max-sm:hidden"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
