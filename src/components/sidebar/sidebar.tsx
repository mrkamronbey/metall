import React from "react";
import styles from "./style.module.css";

const Sidebar = () => {
  const prices = [
    {
      id: 0,
      title: "Чермет габарит - 3А",
      price: "26100 руб",
    },
    {
      id: 1,
      title: "Чермет негабарит - 5А",
      price: "26100 руб",
    },
    {
      id: 2,
      title: "Медь Блестящая (кабель)",
      price: "725 руб",
    },
    {
      id: 3,
      title: "Медный Кабель Силовой",
      price: "690 руб",
    },
    {
      id: 4,
      title: "Бронза (Cu от 81%)",
      price: "525 руб",
    },
    {
      id: 5,
      title: "Латунь",
      price: "26100 руб",
    },
    {
      id: 6,
      title: "Чермет габарит - 3А",
      price: "430 руб",
    },
    {
      id: 7,
      title: "Лом титана",
      price: "270 руб",
    },
    {
      id: 8,
      title: "Алюминий Электротехнический",
      price: "175 руб",
    },
    {
      id: 9,
      title: "Алюминий Микс",
      price: "128 руб",
    },
    {
      id: 10,
      title: "Свинец",
      price: "125 руб",
    },
  ];
  return (
    <div>
      <div className={`xl:w-max md:w-max sm:w-full ${styles.sidebar}`}>
        <h4 className="text-2xl font-medium text-white mb-6">
          Цены на металлолом
        </h4>
        <ul className={`${styles.sidebar_list} text-xs text-white`}>
          {prices.map((elem) => (
            <>
              <li key={elem.id}>
                <span>{elem.title}</span>
                <span className="ml-3">{elem.price}</span>
              </li>
              <hr />
            </>
          ))}
        </ul>
        <div className={styles.nav_call_btn}>
            <a
              href="#"
              className="flex justify-center rounded-xl border border-transparent mt-5  px-4 py-2 text-sm font-medium w-full"
            >
             Смотреть все цены
            </a>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
