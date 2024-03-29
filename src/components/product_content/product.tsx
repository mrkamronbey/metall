import React from 'react'
import Image from 'next/image'
import { DetailsProps } from "./details.props";



const Product = ({ priceDetails }: DetailsProps) => {

  return (
    <div className='product_content_section px-6'>
      <div className="global_container">
        <div className="flex items-stretch xl:flex-row lg:flex-row md:flex-row my-10 sm:flex-col max-sm:flex-col">
          <div className="w-2/5 sm:w-full max-sm:w-full max-sm:mb-10 sm:mb-10 mr-10">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75">
              <Image
                src={priceDetails.image.url}
                alt={priceDetails.name}
                width={615}
                height={439}
                className="h-auto w-full object-cover object-center lg:h-auto lg:w-full"
              />
            </div>
            <div className="mt-4">
              <div className="w-full">
                <h3 className="text-xl text-gray-700 max-sm:text-xs mb-3 w-max">
                  <span
                    aria-hidden="true"
                    className=""
                  />
                  {priceDetails.name}
                </h3>
                {priceDetails.subCategory.category.name === "Чёрный лом" ? (
                  <p
                    key={priceDetails.id}
                    className="text-md flex justify-between items-center"
                  >
                    <span className="font-bold _text_color">
                      до/т:
                    </span>
                    <span className="_bg2_color text-white p-1 rounded-md"> {priceDetails.tonnaPrice}</span>
                  </p>
                ) : (
                  <p className="mt-1 text-md flex justify-between items-center">
                    <span className="font-bold _text_color">
                      до/кг:
                    </span>
                    <span className="_bg2_color text-white p-1 rounded-md">{priceDetails.kgPrice}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-3/5 sm:w-full max-sm:w-full">
            <p className="_text_color text-md text-justify">
              Механически очищенные отходы алюминиевых изделий, использующиеся в электротехнике. Один из самых распространенных видов лома. К нему относятся: обмотки трансформаторов и моторов, конденсаторы, цоколи ламп накаливания, провода и кабели. Является самым дорогостоящим из всех видов алюминиевого сплава. Главное требование к отходам – толщина металла не менее 3 мм. Не должно быть примесей других видов лома, краски, бумаги, изоляции, клемм и т.д. Металлолом должен быть чистый, без следов окисления.
            </p>
            <p className="_text_color text-md text-justify">Наша компания осуществляет прием алюминия электротехнического по высоким ценам. Работаем с физическими и юридическими лицами.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product