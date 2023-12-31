'use client';

import Image, { StaticImageData }  from 'next/image';
import { twMerge as tm } from 'tailwind-merge';
import PlayIcon from '@nerdflix-nx-cypress/shared/container/icons/play';
import ExclamationCircleIcon from '@nerdflix-nx-cypress/shared/container/icons/x-mark'
import { Show } from '../../../types';
import ShowModal from './show-modal';
import React, { useState } from 'react';

type HeroProps = {
  type: 'show';
  show: Show;
} | {
  type: 'static';
  src: StaticImageData;
  children: React.ReactNode;
};

export default function Hero({
  type,
  show,
  src,
  children,
  className,
}: HeroProps & { className?: string }) {
  const [toggle, setToggle] = useState(false);

  const handleToggleDialog = () => {
    setToggle(true);
  };

  return (
    <section className="w-full">
      {type === 'show' && show && (
        <div className="container w-full max-w-screen-2xl px-14">
          <div className="absolute inset-0 -z-10 h-screen w-full">
            <div
              className={tm(
                'bg-black/60 bg-gradient-to-b from-neutral-900/10 to-neutral-900',
                'absolute inset-0 z-10 h-full w-full'
              )}
            />
            <Image
              src={`https://image.tmdb.org/t/p/original${show?.backdrop_path || show?.poster_path || ''}`}
              alt={show?.title || 'poster'}
              className="h-auto w-full object-cover"
              fill
              priority
            />
          </div>
          <div className="grid max-w-lg space-y-2 pt-24">
            <h1 className="text-3xl font-bold md:text-4xl text-white">
              {show?.title || show?.name}
            </h1>
            <div className="flex space-x-2 text-xs font-semibold md:text-sm">
              <p className="text-green-600">
                {Number(show?.vote_average * 10)?.toFixed(2) || '-'}% Match
              </p>
              <p className="text-gray-300">
                {show?.first_air_date || show?.release_date || '-'}
              </p>
            </div>
            <p className="line-clamp-4 text-sm text-gray-300 md:text-base">
              {show?.overview || '-'}
            </p>
            <div className="flex items-center space-x-2 pt-1.5">
              <button
                aria-label="Play video"
                className="h-auto gap-1.5 rounded bg-white px-4 py-2 flex items-center justify-center text-sm font-medium"
                onClick={handleToggleDialog}
              >
                <PlayIcon />
                Play
              </button>
              <button
                aria-label="Open show's details modal"
                className="h-auto gap-2 rounded border border-solid border-white px-4 py-2 text-white flex items-center justify-center"
                onClick={handleToggleDialog}
              >
                <ExclamationCircleIcon />
                More Info
              </button>
            </div>
          </div>
        </div>
      )}
      {type === 'static' && (
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className={tm('absolute inset-0 -z-10 h-screen w-full', className || '')}>
            <Image
              src={src}
              alt="test"
              className="h-auto w-full object-cover"
              fill
              priority
            />
          </div>
          {children}
        </div>
      )}
      {toggle && <ShowModal toggle={toggle} toggleHandler={setToggle} show={show} />}
    </section>
  );
}
