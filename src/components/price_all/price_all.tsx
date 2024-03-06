import { useState } from "react";
import Link from "next/link";
import { PriceAllProps } from "./priceAll.props";
import Image from "next/image";

const PriceAll = ({ categories }: PriceAllProps) => {
  const [active, setActive] = useState<any>("cltbl0vdw8g8k08ldzp87lru1");

  return (
    <>
      <div className="price_all_section pb-20 px-5">
        <div className="global_container">
          <div>
            <div>
              <h2 className="text-center text-3xl sm:text-5xl _text_color mb-10">
                Цены на металлолом
              </h2>
              <div className="xl:flex lg:flex md:flex sm:hidden max-sm:hidden  items-center justify-between tabs_wrapper p-2 rounded-xl">
                {categories.map((elem) => (
                  <>
                    <div className="xl:w-1/3 px-2 md:w-full" key={elem.id}>
                      <button
                        onClick={() => setActive(elem.id)}
                        className={`px-5 text-white py-2 rounded-xl w-full tabs_btn lg:text-sm md:text-sm ${
                          active === elem.id ? "active" : ""
                        }`}
                      >
                        {elem.name}
                      </button>
                    </div>
                  </>
                ))}
              </div>
              <div className="xl:hidden lg:hidden tabs_wrapper p-2 rounded-xl jusctify-center flex-col items-center md:hidden sm:flex max-sm:flex">
                {categories.map((elem) => (
                  <>
                    <div className="w-full px-2 my-1" key={elem.id}>
                      <button
                        onClick={() => setActive(elem.id)}
                        className={`px-5 text-white py-2 rounded-xl w-full tabs_btn lg:text-sm md:text-sm ${
                          active === elem.id ? "active" : ""
                        }`}
                      >
                        {elem.name}
                      </button>
                    </div>
                  </>
                ))}
              </div>
              <div className="mt-8">
                {categories.map((elem) =>
                  elem.id === active
                    ? elem.subCategories?.map((item: any) => (
                        <>
                          <h4 className="text-xl font-bold _text_color max-sm:mt-20 mt-10">
                            {item?.name}
                          </h4>
                          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 max-sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {item?.prices?.map((e: any) => (
                              <>
                                <div key={e.id} className="group relative my-5">
                                  <div className="aspect-h-1 aspect-w-1  overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 border-2 border-black">
                                    <Image
                                      src={e.image.url}
                                      alt={e.name}
                                      width={1000}
                                      height={209}
                                      className="h-auto w-full object-cover object-center lg:h-auto lg:w-full "
                                    />
                                  </div>
                                  <div>
                                    <div className="mt-4">
                                      <div className="w-full">
                                        <h3 className="text-md text-gray-700 max-sm:text-xs mb-3 w-max font-bold">
                                          <span
                                            aria-hidden="true"
                                            className=""
                                          />
                                          {e.name.length >= 18
                                            ? `${e.name.substring(0, 15)}...`
                                            : e.name}
                                        </h3>
                                        {item.name === "Черного лома" ? (
                                          <p
                                            key={e.id}
                                            className="text-sm flex justify-between items-center"
                                          >
                                            <span className="font-bold _text_color">
                                              до/т:
                                            </span>
                                            <span className="_bg2_color text-white p-1 rounded-md">
                                              {" "}
                                              {e.tonnaPrice}
                                            </span>
                                          </p>
                                        ) : (
                                          <p className="mt-1 text-sm flex justify-between items-center">
                                            <span className="font-bold _text_color">
                                              до/кг:
                                            </span>
                                            <span className="_bg2_color text-white p-1 rounded-md">
                                              {e.kgPrice}
                                            </span>
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                    <div className="mt-5 w-full">
                                      <Link
                                        href={`/products/${e.slug}`}
                                        className=" rounded-xl text-white w-auto px-3 py-2 text-sm _bg_color"
                                      >
                                        Подробнее...
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        </>
                      ))
                    : null
                )}
              </div>
            </div>
            <>
              <div className="mt-20">
                <hr />
                <h2 className="text-2xl sm:text-3xl _text_color mb-10 font-bold mt-10">
                  От чего зависит цена на лом черных металлов
                </h2>
                <p className="_text_color text-md text-justify">
                  Металлолом – один из способов поддержать индустрию добычи
                  полезных ископаемых и дать каждому желающему шанс заработать.
                  Если у вас есть старые изделия из металла, которые вы не
                  собираетесь использовать, всегда можно обратиться в пункт
                  приема лома и получить деньги в обмен на ненужные вам вещи.
                  Однако каждого, кто хочет обратиться в такую компанию,
                  беспокоит один вопрос – сколько стоит металлолом.
                </p>
                <div className="mt-20">
                  <h4 className="text-2xl sm:text-3xl _text_color mb-5 font-bold">
                    Сколько стоит чермет
                  </h4>
                  <p className="_text_color text-md text-justify">
                    Металлолом делится на две категории: цветной и черный.
                    Черный лом или чермет – это сплав на основе железа с
                    различными добавками, которые придают материалу определенные
                    свойства. Большинство сплавов содержат медь, никель или
                    кремний в разных соотношениях.
                  </p>
                  {/* <br /> */}
                  <p className="_text_color text-md text-justify">
                    Прием черного металлолома осуществляется на общих правилах,
                    установленных цен на такую продукцию нет. Расценки регулярно
                    меняются, так как зависят от рыночных цен на металлы. При
                    обращении в пункт приема металлолом оценивается по
                    нескольким категориям.
                  </p>
                  <br />
                  <p className="_text_color text-md text-justify">
                    Требования к черному металлолому:
                  </p>
                  <br />
                  <p className="_text_color text-md font-bold italic">
                    1. куски металла не должны быть больше установленных
                    значений;
                  </p>
                  <p className="_text_color text-md font-bold italic">
                    2. в составе сплава не должно быть примесей, которые
                    ухудшают качество материала;
                  </p>
                  <p className="_text_color text-md font-bold italic">
                    3. лом не должен быть загрязнен частицами, которые не
                    поддаются переработке;
                  </p>
                  <p className="_text_color text-md font-bold italic">
                    4. на металле не должно быть ржавчины, загрязнений или
                    следов окислений.
                  </p>
                  <br />
                  <p className="_text_color text-md text-justify">
                    Металлолом проверяется по каждому параметру, после этого
                    взвешивается, сотрудник пункта приема устанавливает цену.
                  </p>
                </div>
                <div className="mt-20">
                  <h4 className="text-2xl sm:text-3xl _text_color mb-5 font-bold">
                    Факторы, влияющие на стоимость приема
                  </h4>
                  <p className="_text_color text-md text-justify">
                    Помимо установленных требований, на стоимость влияют
                    дополнительные факторы. Например, вы хотите сдать
                    металлоконструкцию. Такой объект необходимо разобрать,
                    разрезать на крупные куски на небольшие фрагменты и
                    транспортировать лом к месту переработки. Если у вас нет
                    оборудования и опыта для проведения таких работ, лучше
                    обратиться в пункт приема, где оказывают подобные услуги.
                    Однако за демонтаж, погрузку и перевозку придется заплатить,
                    что повлияет на стоимость приема.
                  </p>
                  <p className="_text_color text-md text-justify">
                    Кстати, большинство пунктов приема с большим удовольствием
                    работают с оптовыми клиентами, которые хотят сдать большой
                    объем лома за один раз. В этом случае некоторые услуги
                    оказываются бесплатно. Рекомендуем сначала
                    проконсультироваться с представителем компании, которая
                    занимается приемом металла, и выяснить все подробности
                    лично.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <hr />
                <h2 className="text-2xl sm:text-3xl _text_color mb-10 font-bold mt-10">
                  От чего зависит цена на лом цветных металлов
                </h2>
                <p className="_text_color text-md text-justify">
                  Цветной металлолом высоко ценится в качестве продукта
                  переработки, поэтому сдавать такой лом всегда выгодно. Многие
                  люди плохо представляют, как отличить цветной лом от черного.
                  Однако вы всегда можете обратиться к консультантам пунктов
                  приемов и получить подробный ответ на любой вопрос.
                </p>
                <div className="mt-20">
                  <h4 className="text-2xl sm:text-3xl _text_color mb-5 font-bold">
                    Стоимость цветного металлолома
                  </h4>
                  <br />
                  <p className="_text_color text-md text-justify">
                    Правила приема металлолома строятся на нескольких основных
                    принципах:
                  </p>
                  <br />
                  <p className="_text_color text-md font-bold italic">
                    1. прием лома ведется по весу, поэтому его обязательно
                    взвешивают;
                  </p>
                  <p className="_text_color text-md font-bold italic">
                    2. металлолом должен соответствовать определенным
                    стандартам, так что расценки на выкуп определяются после
                    визуального осмотра сотрудником пункта приема;
                  </p>
                  <p className="_text_color text-md font-bold italic">
                    3. разные категории лома оцениваются по отдельности;
                  </p>
                  <p className="_text_color text-md font-bold italic">
                    4. сбор, погрузку и доставка металлолома до пункта приема
                    относятся к дополнительным оплачиваемым услугам.
                  </p>
                  <br />
                  <p className="_text_color text-md text-justify">
                    Если вы решили обратиться в пункт приема и заработать на
                    металлоломе, необходимо внимательно изучить все требования.
                    Некоторые виды лома стоят дороже, так как выше ценятся на
                    рынке, другие не принесут большой выгоды.
                  </p>
                </div>
                <div className="mt-20">
                  <h4 className="text-2xl sm:text-3xl _text_color mb-5 font-bold">
                    Как сдать металлолом выгодно
                  </h4>
                  <p className="_text_color text-md text-justify">
                    Сдача металлолома – это целая индустрия, в которой каждый
                    желающий может хорошо заработать. От вас требуется только
                    собрать лом, подготовить его и обратиться в ближайший пункт
                    приема для заключения договора скупки. Расценки на прием
                    лома могут меняться в зависимости от ценовой политики самого
                    переработчика, состояния продукции и условий скупки.
                    Например, вы хотите сдать большой объем цветмета в хорошем
                    состоянии, но у вас нет возможности организовать сбор и
                    доставку металла. Пункт приема оказывает подобные услуги, но
                    цены на скупку будут ниже.
                  </p>
                  <p className="_text_color text-md text-justify">
                    Состояние металлолома – самый важный фактор, влияющий на
                    расценки. Если лом загрязнен, в нем присутствуют детали из
                    дерева или пластика, на подготовку уходит много времени. По
                    этой причине цена на прием снижается, так как переработчик
                    тратит собственные ресурсы на очистку лома. В переплавку
                    отправляется только чистый металл, чтобы полученный материал
                    не терял своих качеств. Вы можете подготовить лом к приему и
                    очистить его самостоятельно. Основным требованием станет
                    отсутствие в металлоломе деталей из материалов, которые не
                    поддаются переработке. Например, кабель лучше очистить от
                    изолирующей оболочки перед сдачей в пункт приема. Таким
                    нехитрым образом вы можете значительно повысить расценки на
                    скупку лома.
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceAll;
