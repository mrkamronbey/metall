import { NextPage } from "next";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

import { unbounded } from "@/fonts/fonts";
import { HeaderProps } from "./header.props";
import Navbar from "./navbar";

const Header = ({ categories }: HeaderProps) => {
  return (
    <>
      <div
        className={`${styles.header} ${unbounded.className} sm:px-7 px-7 py-5`}
      >
        <div className="global_container">
          <div
            className={`flex justify-between items-center md:px-5 ${styles.header_wrapper}`}
          >
            <div className="hidden lg:flex">
              <Link href="/">
                <h2 className="text-2xl text-white font-bold">
                  Втор Металл ММ
                </h2>
              </Link>
            </div>
            <div className="flex justify-between items-center xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col max-sm:items-start">
              <a
                className={`text-xs text-white  ${styles.header_link}`}
                href="tel:+7 (926) 956-92-32"
              >
                <i className="bx bxs-phone"></i>
                +7 (926) 956-92-32
              </a>
              <a
                className={`text-xs text-white ml-10 max-sm:m-0 ${styles.header_link}`}
                href="tel:+7 (925) 345-92-32"
              >
                <i className="bx bxs-phone"></i>
                +7 (925) 345-92-32
              </a>
              <a
                className={`text-xs text-white mr-10 ml-10 max-sm:m-0 ${styles.header_link}`}
                href="tel:+7 (925) 345-92-32"
              >
                <i className="bx bxl-whatsapp"></i>
                +7 (926) 956-92-32
              </a>
              <a
                href="https://yandex.ru/navi/213/moscow/search/%D0%A0%D1%8F%D0%B1%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2053%D0%90.%D1%81%D1%821.%20%22%D0%92%D1%82%D0%BE%D1%80%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%20%D0%9C%D0%9C%22/?ll=37.448541%2C55.691836&sll=37.538851%2C55.525190&sspn=0.022573%2C0.006999&z=12.91"
                className={`text-xs text-white mobile_none ${styles.header_link}`}
              >
                <i className="bx bx-map"></i>
                Рябиновая улица 53А.ст1.
              </a>
            </div>
          </div>
          <div className={styles.hr} />
          <Navbar categories={categories} />
        </div>
      </div>
    </>
  );
};

export default Header;
