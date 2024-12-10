const Tarif = () => {
  const items = [
    { icon: "📡", description: "Online və terminallardan ödəniş etmə imkanı" },
    { icon: "📺", description: "250-dən çox rəqəmsal kanal" },
    { icon: "🔒", description: "Static İp xidməti" },
    { icon: "📞", description: "Şəhər telefonu" },
    { icon: "🌍", description: "100mbit/s saniyyəyə qədər sürət" },
    { icon: "💡", description: "7/24 zəng mərkəzi və Texniki dəstək" },
    { icon: "📦", description: "Daimi kompaniyalar" },
    { icon: "💻", description: "Yeni nəsil cihazlar" },
    { icon: "⭐", description: "Müştəri məmnuniyyəti" },
  ];

  return (
    <div className="min-h-screen bg-[url('/molekul.avif')] bg-no-repeat bg-cover dark:bg-gray-800 p-8 flex flex-col items-center justify-center">
      {/* Başlık */}
      <h1 className="text-xl md:text-3xl text-left font-bold text-gray-800 dark:text-white mb-8">
        Kapital telecom-a qoşulduqda əldə edəcəyiniz üstünlüklər.
      </h1>

      {/* Hexagon Grid */}
      <div className="grid grid-cols-2 md:grid-rows-3 md:grid-cols-3 md:gap-6 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 w-40 h-40 flex flex-col p-10 items-center justify-center"
          >
            {/* Altıgen ile SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 2.5 L95 25 L95 75 L50 97.5 L5 75 L5 25 Z"
                fill="#ef4444"
                stroke="none"
              />
            </svg>

            {/* İkon */}
            <div className="relative z-10 text-4xl text-white">{item.icon}</div>
            {/* Açıklama */}
            <p className="relative z-10 font-semibold text-sm text-center text-white mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarif;
