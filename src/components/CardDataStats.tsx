import React from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, total }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-1xl font-extrabold text-black dark:text-white">
          {total}
        </h3>
        <h2 className="font-medium text-black dark:text-white mt-1">{title}</h2>
      </div>
    </div>
  );
};

export default CardDataStats;
