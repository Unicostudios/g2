import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  const stats = [
    {
      label: 'Clients and Counseling',
      value: '250+',
    },
    {
      label: 'Completed Project',
      value: '90+',
    },
    {
      label: 'Expert Team',
      value: '500+',
    },
    {
      label: 'Project Value',
      value: '$5.5M',
    },
  ];

  return (
   <section className="py-12 sm:py-16 md:py-24">
  <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <Image src="/images/section-home-1.jpg" alt="Interior" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-Archivo">Who We Are?</h2>
        </div>
        <div className="absolute bottom-6 left-6 right-6 text-sm sm:text-base text-white leading-relaxed pr-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </div>
      </div>

      <div className="relative flex items-center flex-col  lg:-left-24 mt-10 lg:mt-0 bg-[#FFF9EE] p-6 sm:p-8 md:p-10  shadow-md">
        <p className=" mb-6 text-sm sm:text-base px-26">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-sm sm:text-base mb-12">{s.label}</p>
              <p className="text-2xl sm:text-3xl font-semibold">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default WhoWeAre;
