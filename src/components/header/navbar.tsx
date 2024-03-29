import { HeaderProps } from "./header.props";
import { Fragment, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars4Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { unbounded } from "@/fonts/fonts";
import { useRouter } from "next/router";



const Navbar = ({ categories }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const {pathname} = useRouter();
  
  return (
    <div className={`${styles.header_bottom_wrapper} ${unbounded.className}`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between md:px-5"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <Link href="/" className="-m-1.5 p-1.5">
            <h2 className="text-2xl text-white font-bold">Втор Металл ММ</h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            style={{ color: "#fff" }}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars4Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <ul className="flex items-center">
            {categories?.map((elem) => {
              return (
                <li key={elem.id} className={styles.nav_list_item}>
                  <Link key={elem.id} href={`categories/${elem.slug}`}>
                    <button
                      key={elem.id}
                      className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                    >
                      {elem.name}
                    </button>
                  </Link>
                </li>
              );
            })}
            <li className={styles.nav_list_item}>
              <Link href="/prices">
                <button
                  className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                >
                  Цены
                </button>
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <a href="#limited">
                <button
                  className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                >
                  Вывоз и демонтаж
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className={styles.nav_call_btn}>
            <a
              href="tel:+7 (926) 956-92-32"
              className="inline-flex justify-center text-white rounded-md border border-transparent text-center  px-4 py-2 text-sm font-medium"
            >
              Заказать звонок
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className={`fixed inset-0 z-10 ${unbounded.className}`} />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden">
              <Link href="/" className="-m-1.5 p-1.5">
                <h2 style={{ color: "#375E97" }} className="text-xl font-bold">
                  Втор Металл ММ
                </h2>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {categories?.map((elem) => {
                  return (
                    <Link
                      key={elem.id}
                      href={`categories/${elem.slug}`}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-left font-semibold leading-7 w-full ${styles.drop_btn}`}
                    >
                      {elem.name}
                    </Link>
                  );
                })}
                <Link
                  href="/prices"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-left font-semibold leading-7 w-full ${styles.drop_btn}`}
                >
                  Цены
                </Link>
                <a
                  href="#limited"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-left font-semibold leading-7 w-full ${styles.drop_btn}`}
                >
                  Вывоз и демонтаж
                </a>
                <hr />
                <Link
                  href="tel:+7 (926) 956-92-32"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-left font-semibold leading-7 w-full ${styles.drop_btn}`}
                >
                  +7 (926) 956-92-32
                </Link>
                <Link
                  href="tel:+7 (925) 345-92-32"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-left font-semibold leading-7 w-full ${styles.drop_btn}`}
                >
                  +7 (925) 345-92-32
                </Link>
              </div>
              <div className="py-6">
                <div className={styles.nav_call_btn_media}>
                  <a
                    href="tel:+7 (926) 956-92-32"
                    className="inline-flex justify-center rounded-md border border-transparent text-center  px-4 py-2 text-sm font-medium"
                  >
                    Заказать звонок
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Navbar;
