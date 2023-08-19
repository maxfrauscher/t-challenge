import React, { useState } from 'react';
import TOnlineLogo from './TOnlineLogo';
import { MdClose } from 'react-icons/md';
import { topics } from './TopicNavigation';
import Link from 'next/link';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

function TopicNavigationList({
  navigationList,
  className,
  subClassName
}: {
  navigationList: Topic[];
  className?: string;
  subClassName?: string;
}) {
  return (
    <>
      <ul className={`${className} pt-2`}>
        {navigationList.map((topic) => (
          <>
            <TopicNavigationListItem topic={topic} className={subClassName} />
          </>
        ))}
      </ul>
    </>
  );
}

function TopicNavigationListItem({ topic, className }: { topic: Topic; className?: string }) {
  const [expanded, setExpanded] = useState(topic.expanded);
  return (
    <>
      <li className="pb-2">
        <div className="flex justify-between">
          <Link
            href={`/news/${topic.route}`}
            className="pl-6 pb-2 cursor-pointer whitespace-nowrap hover:text-light-magenta font-bold">
            {topic.title}
          </Link>
          {topic.subTopics && (
            <div
              className="pr-4 text-xl hover:text-light-magenta"
              onClick={() => setExpanded(!expanded)}>
              {!expanded ? <BsChevronDown /> : <BsChevronUp />}
            </div>
          )}
        </div>
        {expanded &&
          topic.subTopics?.map((subTopic) => (
            <ul
              key={subTopic.title}
              className={`py-2 dark:bg-dark-alpine bg-light-alpine w-full ${className}`}>
              <li>
                <Link
                  href={`/news/${subTopic.route}`}
                  className="pl-12 cursor-pointer whitespace-nowrap font-normal hover:text-light-magenta font-bold">
                  {subTopic.title}
                </Link>
              </li>
            </ul>
          ))}
      </li>
    </>
  );
}

export default function MobileNavigation({
  closeMobileNavigation
}: {
  closeMobileNavigation: () => void;
}) {
  const topicsPlusAbo = [{ title: 'PUR-Abo', route: '/abo' }, ...topics];

  const otherLinks = [
    { title: 'Kontakt', route: '/contact' },
    { title: 'Impressum', route: '/imprint' },
    { title: 'Datenschutz', route: '/data-privacy' },
    { title: 'Jugendschutz', route: '/protection-of-minors' }
  ];

  const telekomLinks = [
    {
      title: 'Telekom Services',
      route: '/telekom-services',
      subTopics: [{ title: 'Telekom', route: '/telekom' }]
    },
    { title: 'Magenta Cloud', route: '/magenta' },
    { title: 'Kundencenter', route: '/client-center' },
    { title: 'Tarife & Produkte', route: '/products' }
  ];

  return (
    <>
      <div
        className="fixed z-[1000] top-0 left-80 w-full h-screen bg-black/[.9]"
        onClick={closeMobileNavigation}></div>
      <nav
        id="side-nav"
        className="fixed left-0 top-0 z-[1035] overflow-y-scroll h-full w-80 dark:bg-dark-snow bg-white">
        <div className="flex border-b-4 border-b-light-magenta justify-between items-center h-[86px]">
          <TOnlineLogo size="small" className="px-6" />
          <span
            className="text-2xl cursor-pointer pr-4 hover:text-light-magenta"
            onClick={closeMobileNavigation}>
            <MdClose />
          </span>
        </div>
        <div>
          <TopicNavigationList navigationList={topicsPlusAbo} />
          <TopicNavigationList navigationList={otherLinks} className="py-4" />
          <div className="dark:bg-dark-alpine bg-light-whitelilac h-6" />
          <TopicNavigationList
            navigationList={telekomLinks}
            className="dark:bg-dark-alpine bg-light-whitelilac"
            subClassName="bg-light-whitelilac"
          />
        </div>
      </nav>
    </>
  );
}
