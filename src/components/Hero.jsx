import { useEffect, useState } from "react";
import Typed from "typed.js";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsTelephoneForward } from "react-icons/bs";
const Hero = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "",
        "Yüksək Sürətli İnternet Xidməti,",
        // "Geniş Çeşidli TV Paketləri,",
        "Evdə və İşdə Dayanıqlı Bağlantı,",
        "24/7 Müştəri Dəstəyi.",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-screen py-1 bg-gray-900 dark:bg-gray-200">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-1 shadow-lg">
      <div className="flex-1 flex justify-start items-start">
  <div className="relative">
    <h1 className="text-blue-600 text-4xl sm:text-5xl font-bold tracking-wider">Tele</h1>
    <div className="absolute -right-6 -top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-blue-600 p-1">
      <span className="text-white text-sm sm:text-lg font-bold">1</span>
    </div>
  </div>
</div>

        <button
          className="cursor-pointer md:hidden block"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <div className={`md:flex md:items-center flex items-center justify-center md:w-auto w-full ${menuOpen ? "block" : "hidden"}`} id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
              <li>
                <a className="md:p-4 py-3 px-0 block " href="#" onClick={() => onNavigate("hero")}>
                  Ana səhifə
                </a>
              </li>
              <li>
                <Link className="md:p-4 py-3 px-0 block" to="/Haqqimizda">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <button className="md:p-4 py-3 px-0 block" onClick={() => onNavigate("kompaniya")}>
                  Tariflər
                </button>
              </li>
              {/* <li>
                <Link className="md:p-4 py-3 px-0 block" to="/Kanallar">
                  Tv Kanallar
                </Link>
              </li> */}
              <li>
                <button className="md:p-4 py-3 px-0 block" onClick={() => onNavigate("footer")}>
                  Əlaqə
                </button>
              </li>
              <li>
                <a className="md:p-2 border text-center border-1 bg-blue-600 block md:mb-0 mb-2 rounded dark:text-white" href="https://short.fpay.az/vjXTlOlJ">
                  Ödəniş et
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="h-full w-full flex flex-col md:flex-row items-center justify-around gap-12 p-4">
        {/* Sol Taraf */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[60%] bg-[url('/3.png')] bg-center bg-cover bg-no-repeat rounded-md shadow-lg">
        </div>

        {/* Sağ Taraf */}
        <div className="w-full md:w-1/2 py-14 flex flex-col justify-center gap-4 text-center md:text-left text-white dark:text-gray-800">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
            Salam, Tele 1-ə Xoş Gəldiniz!
          </h1>
          <h3 className="capitalize text-rose-400">
            Biz{" "}
            <span className="typing text-green-500 dark:text-green-700">
              yüksək keyfiyyətli internet xidməti təklif edirik
            </span>
          </h3>
          <p>
          Tele 1 olaraq müasir texnologiyalardan istifadə edərək yüksək sürətli internet xidməti ilə müştərilərimizi təmin edirik. Məqsədimiz, hər zaman sizə ən yaxşısını təqdim etməkdir. Eyni zamanda, etibarlı və dayanıqlı bağlantılarla ev və iş yerləri üçün ideal həllər təklif edirik. Sizə ən qabaqcıl xidmətləri çatdırmaq üçün komandamız davamlı olaraq inkişaf edir və yeni texnologiyaları tətbiq edir.
          </p>
          <div className="mt-4">
            <button className="px-6 py-2  hidden lg:items-center lg:gap-4 lg:justify-around lg:flex bg-rose-500 text-white rounded-md shadow-md hover:bg-rose-600 transition duration-300">
            <a
             href="tel:+994774330505"
             aria-label="Our phone"
             title="Our phone"
             className="transition-colors duration-300 text-white hover:text-deep-purple-800"
           >
             Əlaqə saxlayın
           </a>
<div>
<BsTelephoneForward />
</div>            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes doğrulamasını ekleyin
Hero.propTypes = {
  onNavigate: PropTypes.func.isRequired,  // onNavigate fonksiyonu bir fonksiyon olmalı ve zorunludur
};

export default Hero;
