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
        <a id="home_link">Home</a>
      </Link>
      <Link href="/about">
        <a id="about_link">About</a>
      </Link>
      <Link href="/users/">
        <a id="users_link">
          Users
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
