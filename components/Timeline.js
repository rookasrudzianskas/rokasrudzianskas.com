import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Started coding at coding school 🤘🏻">
        Reflecting on my big passion for technology, at my young age, I have started coding school! It turned out very well, I have started building projects on my own, which became my passion.
      </Step>
      <Step title="Joined Hy-Vee 🛒">
        It was time for a change in my career, and Hy-Vee came calling. The best
        part was reducing my commute time by an hour/day.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Graduated College 🎓">
        One of my most cherished accomplishments. I worked my ass off to get
        this degree.
      </Step>
      <Step title="Family Roadtrip 🚗">
        To celebrate graduating, my family and I did a road trip down the
        Pacific Coast Highway in California. An unforgettable experience.
      </Step>
      <Step title="Full-Time at Workiva">
        I was offered and accepted a full-time offer with Workiva, as well as
        the opportunity to continue my internship until graduation.
      </Step>
      <Step title="Moved to Des Moines 🏙">
        I moved Downtown DSM into a quaint 1BR apartment. Des Moines has always
        felt like home growing up ~45 minutes away.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Started at Workiva 🔥">
        This internship meant a lot to me. Being able to work part-time while
        still getting my school work done was huge.
      </Step>
      <Step title="Started Tutoring Programming">
        Why not make a little extra money and sharpen my skills? I taught Python
        to ISU Freshman.
      </Step>
      <Step title="Second Internship">
        Spent the summer in (beautiful?) Cedar Rapids, IA working at Rockwell
        Collins.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="First Computer">
        I remember many nights searching on the Google and Github how to code one or another app. After many searches, copies, have learned how to code it myself.
      </Step>
    </ul>
    <Divider />
    <Year>2002</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Head of Developer Relations at Vercel 👨‍👩‍👧‍👦">
          I'm extremely excited about this new role helping grow the Next.js and
          Vercel community.
        </Step>
        <Step title="10,000 YouTube Subscribers 🎥">
          After many years on YouTube, I've started to figure this whole video
          thing out.
        </Step>
        <Step title="5,000 Newsletter Subscribers 💌">
          If you want to stay up-to-date on my latest work, it usually hits the
          newsletter first. I try to send an update once a month.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined ▲Vercel">
          I'm excited to help grow the Next.js community and continue building
          the optimal workflow for front-end developers.
        </Step>
        <Step title="Launched React 2025 💯">
          Building a real SaaS application, from zero to production.
        </Step>
        <Step title="Emerging Technology Leader of the Year 🏆">
          I was extremely honored to be one of five finalists nominated for this
          award at the 2020 Prometheus Awards.
        </Step>
        <Step title="Got Married 🥳">
          Great year for a wedding, huh? We had a small ceremony with family and
          it was better than I could have imagined.
        </Step>
        <Step title="Became a Tech Lead 👨🏻‍💻">
          Starting at the beginning of 2020, I moved into a tech leadership role
          on an e-commerce development team at Hy-Vee.
        </Step>
        <Step title="Mastering Next.js made $10K 📈">
          I taught hundreds of students from all over the world how to build web
          applications. Exceeded my wildest expectations.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Software Engineer III ✨">
          Led design system architecture at Hy-Vee, building new components with
          React, Storybook, and styled-components.
        </Step>
        <Step title="Mastering Next.js ⚛️">
          Launched a 50+ lesson video course for building apps with Next.js and
          React.
        </Step>
        <Step title="Bought a Townhome 🏡">
          Who wants to do yardwork? Not me. Plus, Allie and I love living
          downtown Des Moines.
        </Step>
        <Step title="Got Engaged 💍">
          I asked my now fiancée, Allie, to marry me. She said yes! September
          was a busy month, to say the least – I also spoke at three events and
          sold my condo.
        </Step>
        <Step title="Spoke at Talent42 🎤">
          I spoke to over 100 technical recruiting leaders from across the
          country at Talent42 in Seattle during a 45-minute keynote.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
