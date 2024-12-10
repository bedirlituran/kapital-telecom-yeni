import Card from "./Card";

const Xidmet = () => {
  return (
    <div className="w-full h-full  p-4 sm:p-6 lg:p-8 bg-[url('/molekul.avif')] bg-no-repeat bg-cover">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-left underline">
        Xidmətlərimiz
      </h1>
      <p className="text-gray-600 text-base sm:text-lg font-semibold mb-6 mt-6 text-left">
        Şirkətimiz fiziki şəxsləri, özəl və dövlət qurumlarını sürətli Fiber
        Optik İnternet, İP telefoniya, Rəqəmsal televiziya, İP Tv, Domofon,
        Şlaqbaum və bir sıra digər xidmətləri ilə təmin edir. İnternetə ən
        sərfəli qoşulma, Müştəri məmnuniyyəti, sürətli yükləmələr və digər
        üstünlüklərlə fəaliyyət göstəririk.
      </p>

      {/* Kartların Bulunduğu Alan */}
      <section className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <Card ame="Fiber Optik Internet" bg="/optik.jpg" />
          <Card ame="Ip Telefoniya" bg="/iptel.jpg" />
          <Card ame="Rəqəmsal Televiziya" bg="/tv.jpg" />
          <Card ame="Ip Tv 300+ kanal" bg="/iptv.jpg" />
          <Card ame="Ip Domofon" bg="/domofo.jpg" />
          <Card ame="Kamera sistemləri" bg="/cam.jpg" />
          <Card ame="Şlaqbaum" bg="/slaq.jpg" />
        </div>
      </section>
    </div>
  );
};

export default Xidmet;
