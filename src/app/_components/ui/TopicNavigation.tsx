'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { PiHouseFill } from 'react-icons/pi';

export const topics: Topic[] = [
  { title: 'WM 2023', route: '/wm' },
  {
    title: 'Politik',
    route: '/politics',
    subTopics: [
      { title: 'Deutschland', route: '/politics/germany' },
      { title: 'Ausland', route: '/politics/abroad' },
      { title: 'Tagesanbruch', route: '/politics/breaking-dawn' }
    ],
    expanded: false
  },
  { title: 'Ukraine', route: '/ukraine' },
  { title: 'Regional', route: '/regional' },
  { title: 'Sport', route: '/sport' },
  { title: 'Wirtschaft & Finanzen', route: '/economy-and-finance' },
  { title: 'Unterhaltung', route: '/entertainment' },
  { title: 'Panorama', route: '/panorama' },
  { title: 'Gesundheit', route: '/health' },
  { title: 'Leben', route: '/life' },
  { title: 'Spiele', route: '/games' },
  { title: 'Nachaltigkeit', route: '/sustainability' },
  { title: 'Mobilität', route: '/mobility' },
  { title: 'Digital', route: '/digital' },
  { title: 'Heim & Garten', route: '/home' },
  { title: 'Wetter', route: '/weather' },
  { title: 'Kaufberatung', route: '/purchase-advice' },
  { title: 'Video', route: '/video' },
  { title: 'Podcasts', route: '/podcasts' }
];

export default function TopicNavigation() {
  const ref = useRef(null);
  const [scrolledToRight, setScrolledToRight] = useState(false);

  const ArrowNavigation = () => {
    function handleScroll(value: number) {
      if (ref && ref.current) {
        const scrollTo = value > 0 ? ref.current.scrollWidth : 0;
        ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }

    function scrollLeft() {
      handleScroll(-1);
      setScrolledToRight(false);
    }

    function scrollRight() {
      handleScroll(1);
      setScrolledToRight(true);
    }

    return (
      <div className="hidden screen:flex justify-center w-screen mb-[-40px]">
        <div className="flex h-10 w-content justify-between items-center text-lg">
          <div
            onClick={scrollLeft}
            className={`${
              !scrolledToRight ? 'invisible' : ''
            } cursor-pointer hover:text-light-magenta pr-4 z-[100]`}>
            <MdArrowBackIos />
          </div>
          <div
            onClick={scrollRight}
            className={`${
              scrolledToRight ? 'invisible' : ''
            } cursor-pointer hover:text-light-magenta pl-4 z-[100]`}>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ArrowNavigation />
      <div className="z-0 flex justify-center dark:bg-dark-snow bg-white border-b-4 border-light-magenta">
        <div className="screen:w-content w-full hidden screen:flex flex-row items-center p-2 h-10">
          <div
            ref={ref}
            className={`flex flex-row gap-2 text-sm h-10 items-center no-scrollbars overflow-scroll ${
              scrolledToRight ? 'overflow-blur-left' : 'overflow-blur-right'
            }`}>
            <span className="text-light-magenta text-xl cursor-pointer">
              <PiHouseFill />
            </span>
            {topics.map((topic) => (
              <>
                <Link
                  href={`/news/${topic.route}`}
                  className="cursor-pointer whitespace-nowrap hover:text-light-magenta font-bold">
                  {topic.title}
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
