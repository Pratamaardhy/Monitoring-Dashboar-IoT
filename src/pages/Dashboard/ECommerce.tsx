import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 md:grid-cols-4 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Online" total="3"></CardDataStats>
        <CardDataStats title="Offline 1 Menit" total="0"></CardDataStats>
        <CardDataStats title="Offline 10 Menit" total="2"></CardDataStats>
        <CardDataStats title="Offline" total="2"></CardDataStats>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-2">
          <ChartOne />
        </div>
        <div className="col-span-1">
          <ChartThree />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
