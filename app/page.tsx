'use client';

import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image';
import aalto_logo from 'public/Aalto_University_logo.png';
import kth_logo from 'public/kth-logo.png';
import kth from 'public/images/home/kth.jpg';
import kickoff from 'public/images/home/kickoff.jpg';
import nokia from 'public/images/home/nokia.jpg';
import eitkickoff from 'public/images/home/eitkickoff.jpg';
import startup from 'public/images/home/startup.jpg';

import avatar from 'public/images/home/avatar.png';
import avatar_github from 'public/images/home/avatar_github.jpg';
import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';
import {
  getViewsCount,
} from 'app/db/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import gql from 'graphql-tag';
import { RootGithubObject } from './interface/user';
import { GithubRepoCard } from './components/githubcard';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

const socialMediaLinks = [
  {
    link: 'https://github.com/imminh123',
    type: 'github',
  },
  {
    link: 'https://www.linkedin.com/in/minh-nguyen-thac/',
    type: 'linkedin',
  },
  {
    link: 'https://www.instagram.com/call_me_minh/?hl=en',
    type: 'instagram',
  },
  {
    link: 'https://www.facebook.com/callmeminhisfine/',
    type: 'facebook',
  },
];

const iconMap = (type: string): IconProp => {
  switch (type) {
    case 'github':
      return faGithub;
    case 'linkedin':
      return faLinkedin;
    case 'facebook':
      return faFacebook;
    case 'instagram':
      return faInstagram;
    default:
      return faGithub;
  }
};

const BackgroundVideo = ({ videoUrl }) => {
  return (
    <div className="background-video mt-8">
      <video autoPlay playsInline loop muted>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name, description }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <p className="font-medium text-neutral-900 dark:text-neutral-400">
              {description}
            </p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Subs({ name }: { name: string }) {
  noStore();
  let subscribers;
  if (name === '@leerob') {
    // subscribers = await getLeeYouTubeSubs();
  } else {
    // subscribers = await getVercelYouTubeSubs();
  }

  return (
    <p className="text-neutral-600 dark:text-neutral-400">0 subscribers</p>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`https://cucmofinland.substack.com/p/${slug}`}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            {/* <Views slug={slug} /> */}
          </Suspense>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}
const query = gql`
  query {
    user(login: "imminh123") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

export default function Page() {
  const { data } = useSuspenseQuery<RootGithubObject>(query);

  return (
    <section>
      <PreloadResources />

      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        moi, I'm minh 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a software engineer, an optimist, and a lifelong learner. I currently pursuit a Master in Cloud infrastructure and entrepreneurship at `}
        <span className="not-prose">
          <Badge href="https://www.aalto.fi/en">
            <Image
              alt="Aalto Logo"
              width={18}
              height={13}
              style={{ marginRight: 3 }}
              src={aalto_logo}
              priority
            />
            Aalto
          </Badge>
        </span>
        {` and `}
        <span className="not-prose">
          <Badge href="https://www.kth.se/en">
            <Image
              alt="KTH Logo"
              width={15}
              height={15}
              style={{ marginRight: 4 }}
              src={kth_logo}
              priority
            />
            KTH
          </Badge>
        </span>
        {` University`}.
      </p>

      <p className="prose prose-neutral dark:prose-invert mt-3">
        Here, you can know about my work, what I'm currently working on, some
        shower thoughts and what I've learnt along the software journey.
      </p>

      <BackgroundVideo videoUrl="https://d1xyk52624qxh5.cloudfront.net/short_intro_h264.mp4" />

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I don't plan to change the world any time soon, simply using the
          skills I have to solve meaningful, and sometimes beautiful problems.
          After all, software, to me, is just another tool to do it, and I
          always strive to deliver my work with aesthetic and efficiency.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={avatar}
          name="@minhnguyen"
          description={'Resume'}
          link="https://d1xyk52624qxh5.cloudfront.net/Thac Minh Nguyen - Resume.pdf"
        />
        <ChannelLink
          img={avatar_github}
          name="@imminh123"
          description={'Github'}
          link="https://github.com/imminh123"
        />
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Recently, I've written content on my blog and newsletter. Mostly just
          me with my shower thoughts, contemplating the quirks and mysteries of
          life.
        </p>

        <p>
          I'm planning on writing about tech that I'm working with at the time,
          how I'm learning and growing in my career, sharing knowledge along the
          way.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="Your boring life is beautiful"
          slug="your-boring-life-is-beautiful"
        />
        <BlogLink
          name="Serious is not even enough"
          slug="serious-is-not-even-enough"
        />
        <BlogLink
          name="I got myself the biggest fan"
          slug="la-vi-em-o-bay-bi-a"
        />
      </div>

      <Suspense>
        <h2 className="text-2xl font-semibold mb-5">Open Source Projects</h2>
        <section className="grid sm:grid-cols-2 gap-3">
          {data &&
            data.user.pinnedItems.nodes.map((item) => (
              <GithubRepoCard repo={item} />
            ))}
        </section>
      </Suspense>

      <h2 className="mb-3 text-2xl font-medium tracking-tighter mt-8">
        I'm just one message away. Let's connect 🤭
      </h2>
      <div className="flex">
        {socialMediaLinks.map((item) => (
          <a
            href={item.link}
            className="mr-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="xl" icon={iconMap(item.type)} />
          </a>
        ))}
      </div>

      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="Me at the EIT Digital kickoff event in Cluj Napoca, Romania"
            src={kickoff}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <video className="h-full w-full rounded-lg object-cover sm:object-center" autoPlay playsInline loop muted>
            <source
              src={'https://d1xyk52624qxh5.cloudfront.net/junction_sdg.mp4'}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Me standing on stage at the EIT Digital kickoff event in Cluj Napoca, Romania"
            src={eitkickoff}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="Me at the Nokia HQ in Espoo, Finland"
            src={nokia}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Me and my team at the booth showcasing our startup on tool rental service for apartment building"
            src={startup}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Me at KTH University, Stockholm, Sweden"
            src={kth}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/minh-nguyen-thac"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://cucmofinland.substack.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
