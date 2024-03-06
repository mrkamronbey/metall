import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import styles from "./style.module.css";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header_bottom = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center">
            <li className={styles.nav_list_item}>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                  >
                    Чёрный лом
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className={styles.nav_list_item}>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                  >
                    Цветной лом
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className={styles.nav_list_item}>
              <Link href="#">
                <button
                  className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                >
                  Кабель б/у
                </button>
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href="#">
                <button
                  className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                >
                  Пластик
                </button>
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href="#">
                <button
                  className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                >
                  Цены
                </button>
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href="#">
                <button
                  className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                >
                  Вывоз и демонтаж
                </button>
              </Link>
            </li>
            <li className={styles.nav_list_item}>
              <Link href="#">
                <button
                  className={`px-3 py-2 text-sm font-semibold ${styles.nav_btn}`}
                >
                  Контакты
                </button>
              </Link>
            </li>
          </ul>
          <div className={styles.nav_call_btn}>
            <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium"
                    >
                       Заказать звонок 
                    </button>
                  </div>
        </div>
      </div>
    </>
  );
};

export default Header_bottom;
