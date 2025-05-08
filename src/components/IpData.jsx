import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { ClipLoader } from "react-spinners";

const IPData = () => {
  const { ipData, loading, error } = useContext(MainContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[200px]">
        <ClipLoader color="#36d7b7" size={50} />
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;
  if (!ipData) return null;

  const { ip, location, isp } = ipData;

  return (
    <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white shadow-md p-6 rounded-lg flex flex-col md:flex-row md:justify-between md:items-center text-center z-30">
      <div className="flex-1 px-4 sm:border-r-2 border-gray-200 mb-4 md:mb-0">
        <strong className="block text-sm text-gray-500 mb-1">IP Address</strong>
        <p className="text-sm font-semibold">{ip}</p>
      </div>

      <div className="flex-1 px-4 sm:border-r-2 border-gray-200 mb-4 md:mb-0">
        <strong className="block text-sm text-gray-500 mb-1">Location</strong>
        <p className="text-sm font-semibold">
          {location.city}, {location.region}, {location.postalCode},{" "}
          {location.country}
        </p>
      </div>

      <div className="flex-1 px-4 sm:border-r-2 border-gray-200 mb-4 md:mb-0">
        <strong className="block text-sm text-gray-500 mb-1">Timezone</strong>
        <p className="text-sm font-semibold">UTC {location.timezone}</p>
      </div>

      <div className="flex-1 px-4">
        <strong className="block text-sm text-gray-500 mb-1">ISP</strong>
        <p className="text-sm font-semibold">{isp}</p>
      </div>
    </div>
  );
};

export default IPData;
