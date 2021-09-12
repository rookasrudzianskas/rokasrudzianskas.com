import Link from 'next/link';
import { google } from 'googleapis';

import googleAuth from '@/lib/google';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import VideoCard from '../components/VideoCard';

export async function getStaticProps() {
  const auth = await googleAuth.getClient();
  const youtube = google.youtube({
    auth,
    version: 'v3'
  });

  const response = await youtube.videos.list({
    id: 'nrfuN_Hyd3Y,FytxaSVQROc,u_o09PD_qAs',
    part: 'snippet,statistics'
  });

  return {
    props: {
      videos: response.data.items
    },
    revalidate: 60 * 60 // 1 hour
  };
}

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Rokas Rudzianskas
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, writer, and creator. I work as the Head of two impactful startups at CONNEXIOUS and Brainlyemails. You’ve found my personal slice of the internet
          –&nbsp;
          <Link href="/guestbook">
            <a>sign my guestbook</a>
          </Link>
          {" while you're here or "}
          <Link href="/about">
            <a>learn more about me.</a>
          </Link>
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="how-stripe-designs-beautiful-websites"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Startups
        </h3>
        <ProjectCard
          title="CONNEXIOUS"
          description="Build and deploy your very own website or app with no code development platform, without any pain in the a**"
          href="https://conexious.com/"
          icon="react2025"
        />
        <ProjectCard
          title="BRAINLYEMAILS"
          description="Brainlyemails comes packed with templates for any scenario and functionality to let you hit the ground running — in minutes."
          href="https://brainlyemails.com/"
          icon="nextjs"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-12 text-black dark:text-white">
          Recent Videos
        </h3>
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
