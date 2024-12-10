
const Reklam = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      {/* Sol Resim Kısmı */}
      <div className="flex-1 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <img
          src="/reklam.jpg"
          alt="Kapital Telecom"
          className="object-cover w-full cursor-pointer"
        />
      </div>
      {/* Sağ Metin Kısmı */}
      <div className="flex-1 text-center  md:text-left  md:pl-8 mt-6 md:mt-0 lg:p-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Kapital Telecom
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  Kapital Telecom, yüksək sürətli internet və TV həlləri təqdim edərək
  evinizin və iş yerinizin bağlantı ehtiyaclarını ən yaxşı şəkildə
  qarşılayır. Geniş əhatə dairəmiz, uyğun qiymətlərimiz və üstün xidmət
  keyfiyyətimizlə hər zaman yanınızdayıq.
</p>
<p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
  İstər əyləncə, istər iş üçün; Kapital Telecom ilə limitsiz bağlantının
  zövqünü çıxarın. Müasir infrastrukturumuz sayəsində fasiləsiz internet
  təcrübəsi yaşaya bilər, çox müxtəlif TV kanalları ilə ailənizlə birlikdə
  gözəl vaxt keçirə bilərsiniz.
</p>
<button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
  Daha Ətraflı Məlumat
</button>

      </div>
    </div>
  );
};

export default Reklam;
