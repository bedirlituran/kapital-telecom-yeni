import Card2 from "./Card2";

const Kompaniya = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/molekul.avif')] bg-cover bg-no-repeat px-6 py-10">

      {/* BAŞLIQ */}
      <h1 className="text-left text-xl md:text-3xl font-bold underline mb-10">
        Tarif Planları
      </h1>

      {/* KARTLAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">

        <Card2
          title="Tarif 1"
          image="/ev.png"
          price="Aylıq ödəniş 25 AZN"
        />

        <Card2
          title="Tarif 2"
          image="/bina.png"
          price="Aylıq ödəniş 25 AZN"
        />

        <Card2
          title="Tarif 3"
          image="/ofis.png"
          price="Aylıq ödəniş 25 AZN"
        />

        <Card2
          title="Tarif 4"
          image="/speed.png"
          price="Aylıq ödəniş 30 AZN"
        />

      </div>

      {/* ALT YAZI */}
      <div className="text-center mt-12 text-blue-600 font-semibold">
        Static IP aylıq 8 AZN
      </div>

    </div>
  );
};

export default Kompaniya;
