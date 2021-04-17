import Link from "next/link";
import Head from "next/head";

const About = () => (
  <div>
    <Head>
      <title>About</title>
    </Head>
    About Page
    <br />
    <div>
      <p>Sample app created using NextJS and Apollo.</p>
    </div>
    <br />
    <Link href="/">
      <button>
        <a>Go Home</a>
      </button>
    </Link>
  </div>
);

export default About;
