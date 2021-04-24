import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
            <a><h1>Next Apollo</h1></a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users/">
        <a>
          Users
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
