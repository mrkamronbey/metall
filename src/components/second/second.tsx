import Link from 'next/link'
import { SecondProps } from "./second.props";
import Image from 'next/image';

const Second = ({categories}: SecondProps) => {
  return (
    <>
      <div className="second_section md:px-8 sm:px-15 sm:w-full">
        <div className="global_container">
          <div >
            <div className="bg-white px-6">
              <div className="mx-auto max-w-2xl xl:px-0  sm:px-6  lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 max-sm:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
                  {categories.map((elem) => (
                    <div key={elem.id} className="group">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-black">
                        <Image
                          src={elem?.image.url}
                          alt={elem.name}
                          width={382}
                          height={218}
                          className="object-cover object-center group-hover:opacity-75 second_section_img"
                        />
                      </div>
                      <h3 className="mt-4 text-md max-sm:text-sm _text_color">
                        {elem.name}
                      </h3>
                      <div className="mt-5 w-full">
                        <Link
                          href={`categories/${elem.slug}`}
                          className=" rounded-xl text-white w-max px-3 py-2 text-sm _bg_color"
                        >
                          Подробнее...
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second
