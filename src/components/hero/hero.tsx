// export default function Hero() {
//   return (
//     <div className="relative overflow-hidden bg-white">
//       <div className="pb-80 pt-16  sm:pt-24  lg:pt-60">
//         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//           <div className="sm:max-w-lg">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//               ПРИЕМ МЕТАЛЛА ДО 27000 ЗА ТОННУ!
//             </h1>
//             <p className="mt-4 text-xl text-gray-500">
//               ГАЗЕЛЬ, ЛОМОВОЗ, ПУХТО, ДЕМОНТАЖ!
//             </p>
//           </div>
//           <div>
//             <div className="mt-10">
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//               >
//                 <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                   <div className="flex items-center space-x-6 lg:space-x-8">
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                         <img
//                           src="https://kstati.news/upload/iblock/6e1/6e19451b4f57435d776008ded770927c.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-44 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://avatars.mds.yandex.net/get-sprav-products/5632604/2a0000018340620f338b06e28c583d69d96e/M_height"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-34 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://лом-металлолом.рф/upload/iblock/a18/a1881326ae61254ba52f9513c76ed45f.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://ohholding.com.ua/Media/images/news/small/a04a58871ba221027077d562515c0cdc.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-34 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://i.pinimg.com/236x/5e/f5/a8/5ef5a8284ed0baaf8c04ad7b53b90a04.jpg?nii=t"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://67.img.avito.st/image/1/1.JoVm1bauimwwcABrJrlyprZ2iA.Jykn4q1XAQjSPikGPq527eInxww_Rl6vcCWc9QWntCg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="https://st47.stpulscen.ru/images/product/496/289/537_original.jpg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import styles from "./style.module.css";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

 const Hero = () => {
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mt-20"
      // style={{ height: "100dvh" }}
    >
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
            ГАЗЕЛЬ, ЛОМОВОЗ, ПУХТО, ДЕМОНТАЖ!
          </p>
        </div>
        <div className="py-6 mt-10 ">
          <div className={styles.nav_call_btn_media}>
            <a
              href="tel:+7 (958) 400-43-73"
              className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium"
            >
              Заказать звонок
            </a>
          </div>
        </div>
        {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
}

export default Hero
