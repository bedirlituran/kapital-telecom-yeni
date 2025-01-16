/* eslint-disable react/prop-types */

const Card2 = ({title , desc ,desc2,desc3}) => {
  return (
    <div className="relative  w-64 p-4 flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-md">
      <div className="w-[70%] flex items-center justify-center flex-col h-40 rounded-xl shadow-xl border-1 border  border-red-100">
        <div className="bg-gray-100 w-full text-center flex-5 text-red-400 font-bold">{title}</div>
        <div className="bg-red-600 flex-1 flex-col font-bold items-center justify-between border w-full border-red-400">
            <div>
            <h1 className="text-center text-white mt-3">{desc}</h1>
            </div>
            <div>
            <p className="text-center mt-4 text-white">{desc2}</p>
            </div>
        </div>
      </div>

      <div
        className=" w-0 h-0 border-l-[32px] border-r-[32px] border-t-[32px] border-l-transparent border-r-transparent  border-b-red-500 "
        style={{ marginBottom: "12px" }}
      ></div>

      <div className="flex flex-col items-center gap-2">
        <div className="w-2 h-2 bg-red-200 rounded-full"></div>
        <div className="w-2 h-2 bg-red-200 rounded-full"></div>
        <div className="w-2 h-2 bg-red-200 rounded-full"></div>
        <div className="w-2 h-2 bg-red-200 rounded-full"></div>
      </div>

      <div className="mt-4 w-20  h-20 p-2  bg-red-500 rounded-full flex items-center justify-center text-white font-semibold">
        <h1 className="text-center text-sm font-semibold">{desc3}</h1>
      </div>
    </div>
  );
};

export default Card2;
