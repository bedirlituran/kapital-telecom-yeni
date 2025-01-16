import Card2 from "./Card2";

const Kompaniya = () => {
  return (
    <div className="flex-col bg-[url('/molekul.avif')] h-full w-full bg-no-repeat bg-cover">
      {/* Başlık */}
      <h1 className="text-left text-lg sm:text-xl md:text-3xl p-6 md:p-8 font-bold underline">
        Tarif Planları
      </h1>

      {/* Kartlar */}
      <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center p-4 space-y-6 md:space-y-0">
        <Card2
          title="Tarif 1"
          desc="Internet"
          desc2="Sürət 50 mbit/s"
          desc3="Aylıq ödəniş 18 azn"
        />
        <Card2
          title="Tarif 2"
          desc="Internet"
          desc2="Sürət 100Mbit/s"
          desc3="Aylıq ödəniş 25 azn"
        />
        <Card2
          title="Tarif 3"
          desc="Korporativ Tarif  (obyekt və ofis üçün)"
          desc2="Sürət 50Mbit/s"
          desc3="Aylıq ödəniş 20 azn"
        />
         {/* <Card2
          title="Tarif 4"
          desc="TV"
          desc2="Kanal sayı 300+"
          desc3="Aylıq ödəniş 7 azn"
        /> */}
      </div>

      {/* Şəhid ailələri üçün özel tarif */}
      <div className="p-6 sm:p-10 flex flex-col items-center">
        <div className="block w-full sm:w-[90%] md:w-[65%] h-auto border border-0.5 border-black relative rounded-2xl p-6 md:p-10">
          <h1 className="text-left font-bold text-sm sm:text-base md:text-lg leading-relaxed">
            Şəhid ailələrinə, Qazi və veteranlara qoşulma haqqı ödənişsizdir.
            Qazi tarif planından yararlanmaq üçün qoşulma zamanı müvafiq sənəd
            təqdim edilməlidir.
            <br />
            Sürət 20Mbit/s
          </h1>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-red-600 absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 flex items-center justify-center">
            <h1 className="text-white text-xs sm:text-sm md:text-base font-bold text-center">
              Aylıq ödəniş 10 Azn
            </h1>
          </div>
        </div>
        <div className="mt-4 font-bold text-blue-600 text-sm sm:text-base md:text-lg">
          Static ip Aylıq 5 azn
        </div>
      </div>
    </div>
  );
};

export default Kompaniya;
