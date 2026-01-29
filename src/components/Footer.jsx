function Footer() {
  return (
    <div className="pt-8 bg-gray-900 px-5">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* LOGO + AÇIQLAMA */}
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Tele1"
            className="inline-flex items-center"
          >
            <div className="relative">
              <h1 className="text-blue-600 text-5xl font-bold tracking-wide">
                Tele
              </h1>
              <div className="absolute -right-6 -top-1 w-6 h-6 rounded-full flex items-center justify-center bg-blue-600">
                <span className="text-white text-lg font-bold">1</span>
              </div>
            </div>
          </a>

          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white leading-relaxed">
              Şirkətimiz, yüksək keyfiyyətli internet və təhlükəsizlik sistemləri
              ilə evinizə və iş yerinizə rahatlıq və təhlükəsizlik gətirir.
            </p>
          </div>
        </div>

        {/* ƏLAQƏ */}
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Əlaqə vasitələrimiz
          </p>

          <div className="flex flex-col space-y-1">
            <div className="flex">
              <span className="mr-1 text-white">Tel:</span>
              <a
                href="tel:+994772440505"
                className="text-white hover:text-blue-400 transition"
              >
                (077) 244 05 05
              </a>
            </div>

            <div className="flex">
              <span className="mr-1 text-white">Tel:</span>
              <a
                href="tel:+994774660505"
                className="text-white hover:text-blue-400 transition"
              >
                (077) 466 05 05
              </a>
            </div>
          </div>

          <div className="flex mt-2">
            <span className="mr-1 text-white">Email:</span>
            <a
              href="mailto:sales@tele1.az"
              className="text-white hover:text-blue-400 transition"
            >
              sales@tele1.az
            </a>
          </div>
        </div>

        {/* SOSİAL MEDİA */}
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Sosial media
          </span>

          <div className="flex items-center mt-2 space-x-4">
            {/* Twitter */}
            <a href="/" className="text-white hover:text-blue-400 transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1C7.7 8.1 4.1 6.1 1.7 3.1 1.2 3.9 1 4.7 1 5.6c0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6 0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.6z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="/" className="text-white hover:text-pink-400 transition">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M20 3H10C6.1 3 3 6.1 3 10v10c0 3.9 3.1 7 7 7h10c3.9 0 7-3.1 7-7V10c0-3.9-3.1-7-7-7zM15 21c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="/" className="text-white hover:text-blue-600 transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h11v-9h-3v-4h3V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1v3.2h-1.9c-1.5 0-1.8.7-1.8 1.8V11h4.4l-1 4h-3.4v9H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-sm text-white">
            Bizi sosial media vasitələri ilə izləyin.
          </p>
        </div>
      </div>

      {/* ALT HİSSƏ */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-700 lg:flex-row">
        <p className="text-sm text-white">
          © Tele1 MMC. Bütün hüquqlar qorunur.
        </p>

        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:flex-row sm:space-y-0 sm:space-x-6">
          <li>
            <a href="/" className="text-sm text-white hover:text-blue-400 transition">
              Tez-tez verilən suallar
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-white hover:text-blue-400 transition">
              Məxfilik siyasəti
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-white hover:text-blue-400 transition">
              Şərtlər və Qaydalar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
