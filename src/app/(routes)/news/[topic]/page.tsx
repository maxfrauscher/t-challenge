'use client';

import Title from '@/app/_components/forms/Title';
import { topics } from '@/app/_components/ui/TopicNavigation';
import Image from 'next/image';
import React from 'react';

export default function TopicPage({ params }: any) {
  const title: string = topics.find((topic) => topic.route.slice(1) === params.topic)?.title || '';
  return (
    <>
      <div className="screen:flex border dark:border-dark-whitelilac">
        <div className="w-full screen:w-2/3 border-r dark:border-dark-whitelilac">
          <div className="p-6 pl-10">
            <Title type="topic">{title}</Title>
          </div>
          <div>
            <div className="z-0">
              <Image
                src="https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o"
                alt="img"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '400px' }} // optional
              />
            </div>
            <div className="m-8 dark:bg-dark-snow bg-light-snow rounded-lg z-10 relative mt-[-40px]">
              <div className="p-4 dark:text-dark-trout text-light-trout">
                Sub Title Of The Title Below
              </div>
              <div className="px-4 text-5xl">
                Topic: Main Title Of Something And Here It Is What A Great Title
              </div>
              <div className="px-4 h-[1400px]">
                List Of Posts (height of 1400px for testing Sticky Bar)
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 w-full screen:w-1/3">
          <div className="sticky top-4 bg-light-alpine dark:bg-dark-alpine rounded-lg p-4">
            <div className="text-lg pb-2">Schlagzeilen</div>
            <ul className="text-sm">
              <li>Mallorca: Dreiste neue Klau-Masche</li>
              <li>Mann kollabiert bei Festival und stirbt</li>
              <li>Neue Foto-Funktion bei WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
