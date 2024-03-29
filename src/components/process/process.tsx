import Image from "next/image";

const stats = [
  {
    id: 1,
    name: "После Вашего звонка сразу отправляем машину к Вам за металлоломом!",
    value: "1",
    img: "https://zakupka-loma.ru/upload/iblock/007/007cef83d3790fa88946f1d5de3640bf.jpg",
  },
  {
    id: 2,
    name: "Взвесим металлолом прямо на месте, Вам никуда не нужно ехать! Деньги платим сразу в руки!",
    value: "2",
    img: "https://zakupka-loma.ru/upload/iblock/103/1039bfbc7ea42c68381078eac6c2d854.jpg",
  },
  {
    id: 3,
    name: "Грузим металлолом, если нужно, то осуществляем демонтаж. Вы просто наблюдаете!",
    value: "3",
    img: "https://zakupka-loma.ru/upload/iblock/5b1/5b14a251ca478c54b168926372d60e8a.jpg",
  },
];

 const Process = () =>  {
  return (
    <div className="process_section">
      <div className="global_container">
        <div className="bg-white">
          <h2 className='text-center text-3xl sm:text-5xl _text_color mb-10'>Как происходит процесс приема лома</h2>
          <div className="mx-auto  px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 _text_color"
                >
                  <div className="flex items-center">
                    <p className=" text-3xl font-semibold tracking-tight _text_color sm:text-5xl">
                      {stat.value}
                    </p>
                    <Image width={248} height={216} src={stat.img} alt="" className="mb-5 ml-5 process_img" />
                  </div>
                  <p className="text-base leading-7 text-justify">{stat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process
