
// eslint-disable-next-line react/prop-types
const Card = ({bg,ame}) => {
  return (
    <div className="w-[200px] cursor-pointer h-[200px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg grid grid-cols-[100%]">
      {/* Görsel Kısmı */}
      <div className="col-span-4">
        <img
          src={bg}
          alt={ame}
          className="object-cover w-full h-full transition-all duration-300 hover:opacity-90"
        />
      </div>

      {/* Metin Kısmı */}
      <div className="col-span-1 font-bold bg-gradient-to-r px-2 from-red-500 via-red-400 to-red-300 text-center text-white text-wrap flex items-center justify-center  text-sm">
        <h1 className="text-nowrap py-2">{ame}</h1>
      </div>
    </div>
  );
};

export default Card;
