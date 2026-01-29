const Card2 = ({ title, image, price }) => {
  return (
    <div className="flex flex-col items-center relative">

      {/* ÜST BAŞLIQ */}
      <h3 className="text-red-400 font-bold text-lg mb-3 ">
        {title}
      </h3>

      {/* KART */}
      <div className="w-[240px] h-[300px] bg-white shadow-xl border border-red-100 rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* AŞAĞI ÜÇBUCAQ */}
      <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-t-[18px] border-l-transparent border-r-transparent border-t-white -mt-[1px]"></div>

      {/* NÖQTƏLİ XƏTT */}
      <div className="flex flex-col items-center my-3">
        <span className="w-2 h-2 bg-red-300 rounded-full mb-1"></span>
        <span className="w-2 h-2 bg-red-300 rounded-full mb-1"></span>
        <span className="w-2 h-2 bg-red-300 rounded-full"></span>
      </div>

      {/* QİYMƏT DƏYİRMANI */}
      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold text-center px-2 shadow-lg">
        {price}
      </div>
    </div>
  );
};

export default Card2;
