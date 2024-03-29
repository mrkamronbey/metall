import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <>
      <div className="footer pt-14 px-8">
        <div className="global_container">
          <div>
            <div className="mb-10">
              <div className="mb-10">
                <div>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.538851%2C55.525190&mode=whatshere&whatshere%5Bpoint%5D=37.538851%2C55.525085&whatshere%5Bzoom%5D=16.343836&z=16"
                    className="w-full rounded-3xl"
                    height="400"
                    frameBorder={1}
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
              <div className="flex justify-between items-center flex-wrap mb-5">
                <div>
                  <a
                    className={`text-white text-md flex items-center`}
                    href="tel:+7 (926) 956-92-32"
                  >
                    <i className="bx bxs-phone mr-2"></i>
                    +7 (926) 956-92-32
                  </a>
                  <a
                    className={`text-white text-md flex items-center max-sm:mt-3 mt-3`}
                    href="tel:+7 (925) 345-92-32"
                  >
                    <i className="bx bxs-phone mr-2"></i>
                    +7 (925) 345-92-32
                  </a>
                </div>
                <div>
                  <a
                    href="https://yandex.ru/navi/213/moscow/?ll=37.538851%2C55.525190&mode=whatshere&whatshere%5Bpoint%5D=37.538851%2C55.525085&whatshere%5Bzoom%5D=16.343836&z=16"
                    className={`text-white text-md flex items-center max-sm:mt-3`}
                  >
                    <i className="bx bx-map mr-2"></i>
                    район Южное Бутово,
                    <br />
                    Юго-Западный административный округ, Москва
                  </a>
                  <a
                    href="https://yandex.ru/navi/213/moscow/search/%D0%A0%D1%8F%D0%B1%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2053%D0%90.%D1%81%D1%821.%20%22%D0%92%D1%82%D0%BE%D1%80%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%20%D0%9C%D0%9C%22/?ll=37.448541%2C55.691836&sll=37.538851%2C55.525190&sspn=0.022573%2C0.006999&z=12.91"
                    className={`text-white text-md flex items-center mt-3 max-sm:mt-3`}
                  >
                    <i className="bx bx-map mr-2"></i>
                    Рябиновая улица 53А.ст1. Втор Металл ММ
                  </a>
                </div>
                <div className={styles.nav_call_btn}>
                  <a
                    href="tel:+7 (926) 956-92-32"
                    className="inline-flex justify-center rounded-md max-sm:rounded-xs rounded border border-transparent  px-4 py-2 text-sm font-medium md:mt-2 max-sm:mt-3"
                  >
                    Заказать звонок
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center py-5 justify-center">
              <p className="text-white text-center text-xs">
                {" "}
                © 2024 Втор Металл ММ Retail Ltd. All rights reserved. Designed
                by:{" "}
                <a
                  className="underline underline-offset-1"
                  href="https://softwaresystem.uz/"
                >
                  Softwere System Pro
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
