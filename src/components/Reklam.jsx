
const Reklam = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      {/* Sol Resim Kısmı */}
      <div className="flex-1 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <img
          src="/4.png"
          alt="Tele 1"
          className="object-cover w-full cursor-pointer"
        />
      </div>
      {/* Sağ Metin Kısmı */}
      <div className="flex-1 text-center justify-center items-center  md:text-left  md:pl-8 mt-6 md:mt-0 lg:p-8">
      <div className="relative">   <h1 className="text-blue-600 text-5xl font-bold tracking-wide">Tele<span>1</span></h1>
         
          </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
  Yüksək sürətli internet təqdim edərək
  evinizin və iş yerinizin bağlantı ehtiyaclarını ən yaxşı şəkildə
  qarşılayır. Geniş əhatə dairəmiz, uyğun qiymətlərimiz və üstün xidmət
  keyfiyyətimizlə hər zaman yanınızdayıq.
</p>
<p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
İstər əyləncə, istər iş üçün; Tele 1 ilə limitsiz bağlantının zövqünü çıxarın. Müasir infrastrukturumuz sayəsində fasiləsiz internet təcrübəsi yaşaya bilərsiniz. Sürətli və etibarlı xidmətlərimiz ilə hər zaman əlaqədə qalın. Həyatın hər anında internetin gücündən faydalanaraq daha çoxunu kəşf edin.
</p>
<button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
  Daha Ətraflı Məlumat
</button>

      </div>
    </div>
  );
};

export default Reklam;
