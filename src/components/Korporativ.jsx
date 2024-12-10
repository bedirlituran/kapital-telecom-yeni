const Korporativ = () => {
  return (
    <div className="relative h-screen flex flex-col lg:flex-row">
      {/* Arka Plan */}
      <div className="lg:w-1/2 h-1/2 lg:h-full bg-red-500 bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtvcnBvcmF0aXYlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D')] filter brightness-110 contrast-125">
        <div className="absolute inset-0 bg-red-700 bg-opacity-30"></div>
      </div>

      {/* İçerik Alanı */}
      <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-left underline text-gray-800">
          Korporativ tariflər
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed text-gray-700">
          Fərdi internet istifadəçiləri üçün 5 Mbit/s-dən başlayaraq 100 Mbit/s-ə qədər internet sürəti təklif edirik.<br />
          Korporativ müştərilərə yerləşdikləri ərazidən asılı olaraq fərqli texnologiyadan (FO, Radio Relay) <br />
          istifadə etməklə şirkərimizin tələblərinə uyğun yüksək sürətli internet, IP telefoniya (SİP),<br />
          Rəqəmsal TV, IP TV, məlumatların ötürülməsi (VPN) və digər telekommunikasiya<br />
          xidmətləri təklif olunur. Korporativ müştərilər üçün təqdim edilən tarif<br />
          planları fərqlidir və müəssisənin iş fəaliyyətindən asılı olaraq<br />
          ofisə baxıldıqdan sonra müəyyən edilir.
        </p>
      </div>
    </div>
  );
};

export default Korporativ;
