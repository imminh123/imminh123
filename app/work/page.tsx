import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products people love. Here's a summary of my
          work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Sotatek</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full-stack Software Engineer, 2020 — 2023
        </p>
        <p>
          During my time at <a href="https://www.sotatek.com/">Sotatek</a>, a
          Global SDaaS & IT Consulting company, I had the opportunity to work
          and lead cross-functional teams gathering like-minded individuals, and
          contributing to <a href="https://www.setel.com/">products</a> with
          millions of users.
        </p>
        <ul>
          <li>
            I led a dynamic scrum team of five, analyzed PO's requirements into
            technical implementation documents and take part in building
            scalable microservices.
          </li>
          <li>
            Developed services to manage fuel subsidies and handle rebate
            categories for enterprises.
          </li>
          <li>
            Developed <a href="https://www.setel.com/setel-wallet">eWallet</a>{' '}
            features, including integration with other 3rd-party payment
            providers.
          </li>
        </ul>
        <p>
          Notably, our team successfully delivered a pilot system for the
          Malaysian government, empowering them to manage national{' '}
          <a href="https://www.thestar.com.my/business/business-news/2024/04/05/winners-and-losers-of-targeted-subsidy-plan">
            targeted fuel subsidies
          </a>
          via an efficient ePayment solution.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Lisod</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend/Mobile Software Engineer, 2019 — 2020
        </p>
        <p>
          I joined Lisod - an outsourcing company targeting the Japanese market
          in early 2019. In this role, I worked with a Korean client to develop
          cross-platform mobile applications for language learning.
          Subsequently, I transitioned to working on VR content subscription
          applications.
        </p>
        <p>
          Throughout the time at Lisod, due to the speed of working with MVP
          projects, I was able to learn several new trendy technologies of that
          period, such as <a href="https://ionicframework.com/">Ionic</a>,{' '}
          <a href="React Native"></a>. At that time, Flutter wasn't as widely
          adopted as it is today.
        </p>

        <p>
          I was able to work on some hard problems: integrating{' '}
          <a href="https://unity.com/">Unity</a> for a VR application with
          Ionic, a webview based mobile framework, battling with Java for
          Android and Objective C for iOS.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Gemcommerce
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend Software Engineer, 2018 — 2019
        </p>
        <p>
          My journey into the world of software began during as a Frontend
          Software Engineer intern at{' '}
          <a href="https://gemcommerce.com/">Gemcommerce</a> - a product company
          in building eCommerce store and shopping experience.
        </p>
        <p>
          Here, I played a role in developing front-end web and{' '}
          <a href="https://www.shopify.com/">Shopify</a>
          applications. Additionally, I was also a part customer success
          initiatives, assisting clients in integrating with our suite of
          products.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">MindX</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Teacher, 2018 — 2019
        </p>
        <p>
          That's right, I used to be a programming teacher for kids and teens at{' '}
          <a href="https://mindx.edu.vn/">MindX</a>. It involves crafting
          educational materials, organizing classes, delivering lessons, and
          evaluating student progress, providing constructive feedback to
          support their development
        </p>
      </div>
    </section>
  );
}
