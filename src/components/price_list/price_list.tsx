import React from "react";
import styles from "./style.module.css";
import Link from 'next/link'
import { PriceProps } from "./price.props";

const PriceList = ({prices, tenPrice}: PriceProps ) => {
  return (
    <div className="price_section pt-14">
      <div className="global_container">
        <div>
          <h2 className="text-center text-3xl sm:text-5xl _text_color mb-10">
            Цены на металлолом
          </h2>
          <table className="border-collapse border-slate-500  w-full border-2 rounded-2xl">
            <thead style={{ background: "#FB6542" }}>
              <tr>
                <th className="border-2 border-slate-600 text-white px-2 py-3 text-lg max-sm:text-xs">
                  №
                </th>
                <th className="border-2 border-slate-600 text-white px-2 py-3 text-lg max-sm:text-xs">
                  Имя
                </th>
                <th className="border-2 border-slate-600 text-white px-2 py-3 text-lg max-sm:text-xs">
                Цена за 1 тонну
                </th>
              </tr>
            </thead>
            <tbody>
              {tenPrice?.map((elem, index) => (
                <tr key={elem.id}>
                  <td className="border-2 border-slate-700 _text_color p-2 text-sm text-center">
                    {index + 1}
                  </td>
                  <td className="border-2 border-slate-700 _text_color p-2 text-sm max-sm:text-xs">
                    {elem?.name}
                  </td>
                  <td className="border-2 border-slate-700 _text_color p-2 text-sm max-sm:text-xs">
                    {
                      elem?.subCategory?.name === "Черного лома" ? elem?.tonnaPrice : elem?.kgPrice
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className={` mt-10 mx-auto w-full flex items-center justify-center ${styles.nav_call_btn_media}`}
          >
            <Link
              href="/prices"
              className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium"
            >
              Смотреть все цены
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
