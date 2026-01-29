import {
  Check,
  Wifi,
  Zap,
  Building2,
  Home,
  Briefcase,
  Globe,
} from "lucide-react";

const TarifCard = () => {
  const commonTarif = {
    price: "25",
    speed: "100",
    features: [
      "Limitsiz internet",
      "7/24 texniki dəstək",
      "Peşəkar router",
      "Stabil bağlantı",
    ],
  };

  const usageAreas = [
    {
      title: "Bina üçün",
      icon: Building2,
      bg: "from-blue-500 to-indigo-500",
    },
    {
      title: "Həyət evi üçün",
      icon: Home,
      bg: "from-green-500 to-emerald-500",
    },
    {
      title: "Ofis üçün",
      icon: Briefcase,
      bg: "from-purple-500 to-pink-500",
    },
    {
      title: "Hər yer üçün",
      icon: Globe,
      bg: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/molekul.avif')] bg-cover bg-center py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Wifi className="w-5 h-5" />
            Eyni Tarif – Fərqli Məkanlar
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            25 AZN <span className="text-red-600">/ 100 Mbit/s</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bina, həyət evi, ofis və istənilən məkan üçün eyni sürətli və stabil internet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usageAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-[1.03] transition-all"
              >
                {/* Dynamic Icon */}
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${area.bg} shadow-lg`}
                >
                  <Icon className="w-12 h-12 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>

                {/* Speed */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  {commonTarif.speed} Mbit/s
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6 w-full">
                  {commonTarif.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center mb-5">
                  <div className="text-3xl font-bold text-gray-900">
                    {commonTarif.price} AZN
                  </div>
                  <div className="text-sm text-gray-500">aylıq</div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all shadow-lg active:scale-95">
                  İndi Al
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TarifCard;
