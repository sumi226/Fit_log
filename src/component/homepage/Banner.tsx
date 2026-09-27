import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
      <section className="">
        <div className="container mx-auto mt-20 rounded-4xl gap-4  bg-[#0c0d10] p-20  text-white grid grid-cols-1 md:grid-cols-2">
          <div text-left>
            <p className="text-lg font-semibold text-[#c2f800]">
              WORKOUT LIBRARY
            </p>
            <h2 className="text-4xl font-bold">
              TRAIN WITH INTENT. LOG <br />
              EVERY SET.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
              <br /> into today's plan, and watch the week's work add up.
            </p>
            <button className="btn btn-active btn-success bg-[#c2f800] text-black mt-4 hover:bg-[#a1c600]">
              Success
            </button>
          </div>
          <div>
            <Image src={bannerImg} alt="Banner Image" />
          </div>
        </div>
      </section>
    );
};

export default Banner;
